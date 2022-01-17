import { TextInput, TokenBadge, _AutoComplete as AutoComplete, Tag } from '@1hive/1hive-ui';
import { parseUnits } from 'ethers/lib/utils';
import { connect } from 'formik';
import { noop } from 'lodash-es';
import React, { ReactNode, useEffect, useState, useRef, Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NETWORK_TOKENS } from 'src/constants';
import { useWallet } from 'src/contexts/wallet.context';
import { getTokenInfo } from 'src/hooks/use-contract.hook';
import { TokenAmountModel } from 'src/models/token-amount.model';
import { TokenModel } from 'src/models/token.model';
import { getNetwork } from 'src/networks';
import { fetchRewardTokens } from 'src/services/quest.service';
import { arrayDistinctBy } from 'src/utils/array.util';
import { GUpx } from 'src/utils/css.util';
import { Logger } from 'src/utils/logger';
import { floorNumber } from 'src/utils/math.utils';
import { includesCaseInsensitive } from 'src/utils/string.util';
import { isAddress } from 'src/utils/web3.utils';
import styled from 'styled-components';
import { Outset } from '../utils/spacer-util';
import { FieldInput } from './field-input';

// #region StyledComponents

const AmountTextInputStyled = styled(TextInput)`
  pointer-events: all;
  flex-grow: 1;
  max-width: 200px;

  div {
    pointer-events: none;
  }
`;

const TokenBadgeStyled = styled(TokenBadge)`
  width: fit-content;
  pointer-events: all;
`;

const AutoCompleteWrapperStyled = styled.div`
  flex-grow: 3;
`;

const TokenNameStyled = styled.span`
  margin-right: ${GUpx()};
`;

const LineStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const AmountTokenWrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${(props: any) => (props.wide ? 'width:100%;' : '')}
`;

// #endregion

type Props = {
  id: string;
  isEdit?: boolean;
  isLoading?: boolean;
  label?: string;
  placeHolder?: string;
  value?: TokenAmountModel;
  onChange?: Function;
  formik?: any;
  compact?: boolean;
  tooltip?: string;
  tooltipDetail?: ReactNode;
  maxDecimals?: number;
  disabled?: boolean;
  wide?: boolean;
};

function AmountFieldInput({
  id,
  isEdit = false,
  isLoading = false,
  label = '',
  placeHolder = '',
  value,
  onChange = noop,
  formik,
  tooltip,
  tooltipDetail,
  compact = false,
  maxDecimals,
  disabled = false,
  wide = false,
}: Props) {
  const { defaultToken, type } = getNetwork();
  const [decimalsCount, setDecimalsCount] = useState(maxDecimals);
  const [tokens, setTokens] = useState<TokenModel[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [amount, setAmount] = useState<number | undefined>(value?.parsedAmount ?? 0);
  const [token, setToken] = useState<TokenModel>(value?.token ?? defaultToken);
  const [availableTokens, setAvailableTokens] = useState<TokenModel[]>([]);
  const wallet = useWallet();

  const autoCompleteRef: React.Ref<any> = useRef(null);

  useEffect(() => {
    const fetchAvailableTokens = async () => {
      const networkDefaultTokens = (NETWORK_TOKENS[type] as TokenModel[]) ?? [];
      const questsUsedTokens = await fetchRewardTokens();
      setAvailableTokens(
        arrayDistinctBy([...networkDefaultTokens, ...questsUsedTokens], (x) => x.token),
      );
    };

    document.addEventListener(
      'focusin',
      () => {
        if (wallet.account && isEdit && !value?.token) fetchAvailableTokens();
      },
      true,
    );
  }, [wallet.account, document.activeElement]);

  useEffect(() => {
    if (availableTokens.length) {
      if (searchTerm && isAddress(searchTerm)) {
        setTokens([]);
        getTokenInfo(searchTerm)
          .then((tokenInfo) => {
            if (typeof tokenInfo !== 'string') if (tokenInfo) setTokens([tokenInfo]);
          })
          .catch(Logger.error);
      } else {
        setTokens(
          availableTokens.filter(
            (x: TokenModel) =>
              !searchTerm || includesCaseInsensitive([x.name, x.symbol].join('|'), searchTerm),
          ),
        );
      }
    }
  }, [searchTerm, availableTokens]);

  useEffect(() => {
    if (!isEdit) {
      if (value?.parsedAmount && (!maxDecimals || maxDecimals > 0))
        setDecimalsCount(maxDecimals ?? Math.floor(Math.log10(value.parsedAmount)) * -1);
    }
  }, [maxDecimals, isEdit, value?.parsedAmount]);

  useEffect(() => {
    setAmount(value?.parsedAmount ?? 0);
    setToken(value?.token ?? defaultToken);
  }, [value]);

  const onAmountChange = (e: any) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    if (token && e.target.value !== '') {
      const nextValue = {
        token: {
          ...token,
          amount: parseUnits(newAmount.toString(), token.decimals).toString(),
        },
        parsedAmount: +newAmount,
      };
      if (formik) formik.setFieldValue(id, nextValue);
      else onChange(nextValue);
    }
  };

  const onTokenChange = (i: number) => {
    const newToken = tokens[i];
    autoCompleteRef.current.value = newToken.symbol;
    setSearchTerm(undefined);
    setToken(newToken);
    const nextValue = { token: newToken, parsedAmount: amount };
    if (formik) formik.setFieldValue(id, nextValue);
    else onChange(nextValue);
  };

  return (
    <FieldInput
      id={id}
      label={label}
      tooltip={tooltip}
      tooltipDetail={tooltipDetail}
      compact={compact}
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <AmountTokenWrapperStyled wide={wide}>
          {amount !== undefined && (
            <Outset horizontal>
              {isEdit ? (
                <AmountTextInputStyled
                  id={id}
                  onChange={onAmountChange}
                  placeHolder={placeHolder}
                  type="number"
                  value={amount}
                  disabled={disabled}
                  wide={wide}
                />
              ) : (
                floorNumber(amount, decimalsCount)
              )}
            </Outset>
          )}
          {value?.token.token ? (
            <TokenBadgeStyled
              symbol={value.token.symbol}
              address={value.token.token}
              networkType="private"
            />
          ) : (
            <AutoCompleteWrapperStyled>
              <AutoComplete
                items={tokens.map((x, index: number) => index)}
                onChange={setSearchTerm}
                onSelect={onTokenChange}
                ref={autoCompleteRef}
                placeholder="search name or address"
                wide={wide}
                renderSelected={(i: number) => (
                  <Fragment key={tokens[i].token}>{tokens[i].name}</Fragment>
                )}
                renderItem={(i: number) => (
                  <LineStyled key={tokens[i].symbol}>
                    <TokenNameStyled>{tokens[i].name}</TokenNameStyled>
                    <Tag>{tokens[i].symbol}</Tag>
                  </LineStyled>
                )}
              />
            </AutoCompleteWrapperStyled>
          )}
        </AmountTokenWrapperStyled>
      )}
    </FieldInput>
  );
}

// @ts-ignore
const AmountFieldInputFormik = connect(AmountFieldInput);

export default AmountFieldInput;
export { AmountFieldInputFormik };
