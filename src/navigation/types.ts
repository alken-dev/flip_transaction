import { Transaction } from "../models/types";

export type RootStackParamList = {
    TransactionList: undefined;
    TransactionDetail: { transactionDetail: Transaction };
  };
  