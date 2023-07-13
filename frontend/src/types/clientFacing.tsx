import { IIsMaxWidth1025, IIsMaxWidth600px } from "./maxWidth";

export interface ICustomers extends IIsMaxWidth600px, IIsMaxWidth1025 {}

interface IGeographyData {
  id: string;
  value: number;
}

export interface IUseGetGeographyQuery {
  data: IGeographyData[];
  isLoading: boolean;
}

interface IStatItem {
  month: string;
  totalSales: number;
  _id: string;
}

interface IStatData {
  createdAt: string;
  monthlyData: IStatItem[];
  productId: string;
  updatedAt: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  __v: number;
  _id: string;
}

export interface IProduct {
  category: string;
  description: string;
  name: string;
  price: number;
  rating: number;
  stat: IStatData[];
  supply: number;
  _id: string;
}

export interface IUseGetProductsQueryResult {
  data: IProduct[] | undefined;
  isLoading: boolean;
}

export interface ITransactionData {
  _id: string;
  userId: string;
  cost: number;
  products: string[];
  createdAt: string;
}

interface IData {
  total: number;
  transactions: ITransactionData[];
}

export interface IUseGetTransactionsQueryResult {
  data: IData;
  isLoading: boolean;
}

export interface ITransactions extends IIsMaxWidth600px, IIsMaxWidth1025 {}
