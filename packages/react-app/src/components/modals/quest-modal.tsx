import { Button, IconPlus, useTheme } from '@1hive/1hive-ui';
import { noop } from 'lodash-es';
import { useEffect, useState } from 'react';
import { ENUM_QUEST_STATE, ENUM_QUEST_VIEW_MODE } from 'src/constants';
import { QuestModel } from 'src/models/quest.model';
import styled from 'styled-components';
import * as QuestService from 'src/services/quest.service';
import { IN_A_WEEK_IN_MS } from 'src/utils/date.utils';
import { getNetwork } from 'src/networks';
import Quest from '../quest';
import ModalBase, { ModalCallback } from './modal-base';
import { useQuestsContext } from '../../contexts/quests.context';

// #region StyledComponents

const ButtonLinkStyled = styled(Button)`
  border: none;
  box-shadow: none;
  padding: 0;
  height: fit-content;
  color: ${({ theme }: any) => theme.contentSecondary};
`;

// #endregion

type Props = {
  data?: QuestModel;
  onClose?: ModalCallback;
  questMode: string;
  buttonMode?: 'link' | 'strong' | 'normal' | 'icon' | 'label';
};

export default function QuestModal({
  data = undefined,
  onClose = noop,
  questMode = ENUM_QUEST_VIEW_MODE.ReadSummary,
  buttonMode = 'normal',
}: Props) {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('');
  const { setNewQuest } = useQuestsContext();
  const [questData, setQuestData] = useState(
    data ?? {
      expireTime: new Date(IN_A_WEEK_IN_MS + 24 * 36000),
      state: ENUM_QUEST_STATE.Draft,
    },
  );

  useEffect(() => {
    const { type } = getNetwork();
    if (type === 'rinkeby' && localStorage.getItem('FLAG_DUMMY')?.toLowerCase() === 'true') {
      // Load dummy data only for rinkeby testing and flag activated
      const feedDummy = async () => {
        const resp = await fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt');
        const dummyData = await resp.text();
        setQuestData({
          ...questData,
          title: dummyData.substring(1, dummyData.indexOf('\n')),
          description: dummyData.slice(dummyData.indexOf('\n') + 1),
        });
      };
      feedDummy();
    }
  }, []);

  useEffect(() => {
    switch (questMode) {
      case ENUM_QUEST_VIEW_MODE.Create:
        setButtonLabel('Create quest');
        break;

      case ENUM_QUEST_VIEW_MODE.Update:
        setButtonLabel('Update quest');
        break;

      case ENUM_QUEST_VIEW_MODE.ReadDetail:
        setButtonLabel('Details');
        break;

      default:
        break;
    }
  }, [questMode]);

  const onOpenButtonClick = () => {
    setOpened(true);
  };

  const closeModal = (success: boolean) => {
    setOpened(false);
    onClose(success);
  };

  const fetchNewQuest = async (questAddress: string) => {
    setInterval(async () => {
      const newQuest = await QuestService.fetchQuest(questAddress);
      if (newQuest) {
        setNewQuest(newQuest);
        clearInterval();
      }
    }, 1000); // Pull each seconds until the new quest is fetched
    closeModal(true);
  };

  return (
    <ModalBase
      id="create-quest-modal"
      title="Create quest"
      openButton={
        buttonMode === 'link' ? (
          <ButtonLinkStyled theme={theme} onClick={onOpenButtonClick}>
            {buttonLabel}
          </ButtonLinkStyled>
        ) : (
          <Button
            icon={<IconPlus />}
            label={buttonLabel}
            wide
            mode={buttonMode === 'strong' ? 'strong' : 'normal'}
            display={buttonMode === 'icon' ? 'icon' : 'label'}
            onClick={onOpenButtonClick}
          />
        )
      }
      isOpen={opened}
      onClose={closeModal}
    >
      <Quest dataState={{ questData, setQuestData }} onSave={(x) => fetchNewQuest(x)} />
    </ModalBase>
  );
}
