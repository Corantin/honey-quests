export type TransactionModel = {
  hash?: string;
  id: string;
  message?: string;
  estimatedDuration?: number;
  status: string;
  progress?: number;
  args?: {
    questAddress?: string;
    containerId?: string;
    disputeState?: number;
  };
  type:
    | 'TokenApproval'
    | 'QuestCreate'
    | 'QuestFund'
    | 'QuestReclaimFunds'
    | 'ClaimSchedule'
    | 'ClaimExecute'
    | 'ClaimChallenge'
    | 'ClaimChallengeResolve';
};
