import {
  CompanyType,
  KnowledgeDataType,
  ListItemType,
  MoneyCardType,
  PortfolioType,
  SwipeDataType,
  TransactionItemType,
} from '@extra/extra-types';
import { ListItemKey } from '@extra/global-enums';

export const arraySwipeData: Array<SwipeDataType> = [
  {
    id: 1,
    icon: 'coin-amico',
    title: 'swipe-title',
    subtitle: 'swipe-subtitle',
  },
  {
    id: 2,
    icon: 'coin-amico',
    title: 'swipe-title',
    subtitle: 'swipe-subtitle',
  },
  {
    id: 3,
    icon: 'coin-amico',
    title: 'swipe-title',
    subtitle: 'swipe-subtitle',
  },
];

export const arrayMoneyCardData: Array<MoneyCardType> = [
  {
    id: 1,
    title: 'total-balance',
    amount: '$4,500.00',
    hasButtons: true,
  },
  {
    id: 2,
    title: 'round-ups',
    amount: '$500.00',
    hasButtons: false,
  },
  {
    id: 3,
    title: 'term-savings',
    amount: '$1,500.00',
    hasButtons: false,
  },
  {
    id: 4,
    title: 'stocks',
    amount: '$2,500.00',
    hasButtons: false,
  },
];

export const arrayListItemData: Array<ListItemType> = [
  {
    id: 1,
    key: ListItemKey.PORTFOLIO,
    title: 'portfolio',
    subtitle: 'aggressive',
  },
  {
    id: 2,
    key: ListItemKey.ROUND_UP,
    title: 'round-up-settings',
    subtitle: 'automatic',
  },
  {
    id: 3,
    title: 'recurring',
    key: ListItemKey.RECURRING,
    subtitle: 'monthly-amount',
  },
  {
    id: 4,
    key: ListItemKey.BENEFICIARY,
    title: 'beneficiary',
    subtitle: 'child-count',
  },
  {
    id: 5,
    key: ListItemKey.ONE_TIME,
    title: 'one-time-investment',
    subtitle: '',
  },
];

export const arrayTransactionData: Array<TransactionItemType> = [
  {
    id: 1,
    title: 'one-time-investment',
    subtitle: 'processing',
    amount: '$20',
  },
  {
    id: 2,
    title: 'withdrawal',
    subtitle: 'processing',
    amount: '$-8.00',
  },
  {
    id: 3,
    title: 'round-up-investment',
    subtitle: 'processing',
    amount: '$10.36',
  },
];

export const arrayKnowledgeData: Array<KnowledgeDataType> = [
  {
    id: 1,
    icon: 'family',
    title: 'what-family-plus',
  },
  {
    id: 2,
    icon: 'round-up',
    title: 'how-round-up',
  },
  {
    id: 3,
    icon: 'saving',
    title: 'what-family-saving',
  },
  {
    id: 4,
    icon: 'withdraw',
    title: 'how-withdraw',
  },
];

export const arrayPortfolioData: Array<PortfolioType> = [
  { id: 1, title: 'prospective-outcome', risk: 6, return: '10-15%' },
  { id: 2, title: 'prospective-outcome', risk: 6, return: '10-15%' },
  { id: 3, title: 'prospective-outcome', risk: 6, return: '10-15%' },
  { id: 4, title: 'prospective-outcome', risk: 6, return: '10-15%' },
  { id: 5, title: 'prospective-outcome', risk: 6, return: '10-15%' },
];

export const arrayCompanyData: Array<CompanyType> = [
  { id: 1, title: 'large-company', percentage: 55 },
  { id: 2, title: 'medium-company', percentage: 10 },
  { id: 3, title: 'small-company', percentage: 5 },
  { id: 4, title: 'international-company', percentage: 30 },
];
