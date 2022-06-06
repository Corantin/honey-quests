import { ButtonBase, IconDown, useTheme, useViewport } from '@1hive/1hive-ui';
import React from 'react';
import { GUpx } from 'src/utils/style.util';
import styled from 'styled-components';

// #region StyledComponents

const HeaderAccountButtonStyled = styled(ButtonBase)`
  height: 100%;
  padding: ${GUpx(1)};
  &:active {
    background: ${({ backgroundActive }: any) => backgroundActive};
  }
`;

// #endregion

type Props = {
  content: React.ReactNode;
  hasPopover?: boolean;
  icon: React.ReactNode;
  onClick: Function;
};

function HeaderModule({ content, hasPopover = true, icon, onClick }: Props) {
  const { above } = useViewport();
  const theme = useTheme();

  return (
    <HeaderAccountButtonStyled
      onClick={onClick}
      background={theme.surface}
      backgroundActive={theme.surfacePressed}
    >
      <div
        // @ts-ignore
        css={`
          display: flex;
          align-items: center;
          text-align: left;
          padding: 0 ${GUpx(1)};
        `}
      >
        <>
          {icon}
          {above('min') && (
            <>
              <div
                // @ts-ignore
                css={`
                  padding-left: ${GUpx(1)};
                  padding-right: ${GUpx(0.5)};
                `}
              >
                {content}
              </div>
              {hasPopover && (
                <IconDown
                  size="small"
                  css={`
                    color: ${theme.surfaceIcon};
                  `}
                />
              )}
            </>
          )}
        </>
      </div>
    </HeaderAccountButtonStyled>
  );
}

export default HeaderModule;
