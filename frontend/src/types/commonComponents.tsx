import { IIsMaxWidth1025, IIsMaxWidth600px } from "./maxWidth";
import React from "react";
import { IUsersData } from "./users";

export interface IHeader {
  title: string;
  subtitle?: string;
}

export interface IDataGridCustomToolbar extends IIsMaxWidth600px {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISalesChart extends IIsMaxWidth600px {
  startDate?: Date;
  endDate?: Date;
  isMonthly: boolean;
}

interface ISalesByCategory {
  accessories: number;
  hardwood: number;
  panels: number;
  woodenfloor: number;
}

interface IOverallData {
  createdAt: string;
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: [
    {
      month: string;
      totalSales: number;
      totalUnits: number;
    }
  ];
  dailyData: [
    {
      date: string;
      totalSales: number;
      totalUnits: number;
    }
  ];
  salesByCategory: ISalesByCategory;
}

interface ILineData {
  x: string;
  y: number;
}

export interface ITotalLine {
  id: string;
  color: string;
  data: ILineData[];
}

export interface IUseGetSalesQuery {
  data: IOverallData;
  isLoading: boolean;
}

export interface IUseGetTransactionsQueryResult {
  data: IUsersData[];
  isLoading: boolean;
}

export interface IUsersTable
  extends IIsMaxWidth600px,
    IIsMaxWidth1025,
    IUseGetTransactionsQueryResult {
  includeRoleColumn?: boolean;
  includeCheckboxSelection?: boolean;
  includeActionColumn?: boolean;
}
