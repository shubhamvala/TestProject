import { ListItemKey } from '@extra/global-enums';

export interface SwipeDataType {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}

export interface MoneyCardType {
  id: number;
  title: string;
  amount: string;
  hasButtons: boolean;
}

export interface ListItemType {
  id: number;
  key: ListItemKey;
  title: string;
  subtitle: string;
}

export interface TransactionItemType {
  id: number;
  title: string;
  subtitle: string;
  amount: string;
}

export interface KnowledgeDataType {
  id: number;
  icon: string;
  title: string;
}

export interface PortfolioType {
  id: number;
  title: string;
  risk: number;
  return: string;
}

export interface CompanyType {
  id: number;
  title: string;
  percentage: number;
}
