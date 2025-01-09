export interface IDataUserTransaction {
  id: number;
  time: string;
  cost: string;
  revenue: string;
  profit: string;
  block: number;
  delay: number;
  dex: string;
  type: string;
  metadata: {
    timeSpent: string;
    jupiterQuoteTime: string;
  };
}[];

export interface ISlots {
  slot: number;
  leader: string;
  timestamp: string;
  sandwiches: {
    participants: {
      role: string;
      id: string;
    }[];
    transactions: {
      from: {
        currency: string;
        value: string;
      }[];
      to: {
        currency: string;
        value: string;
      }[];
    };
  }[];
}

export interface IDataSetting {
  id: number;
  pool: string;
  ping: number;
  flag: string;
  checked: boolean;
}
