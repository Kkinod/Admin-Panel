import React from "react";
import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import { navItems } from "./navItems";

export const sidebarItems = [
  {
    text: navItems.Dashboard,
    icon: null,
  },
  {
    text: navItems.Ecommerce,
    icon: <HomeOutlined />,
  },
  {
    text: navItems.ClientFacing,
    icon: null,
  },
  {
    text: navItems.Products,
    icon: <ShoppingCartOutlined />,
  },
  {
    text: navItems.Customers,
    icon: <Groups2Outlined />,
  },
  {
    text: navItems.Orders,
    icon: <ReceiptLongOutlined />,
  },
  {
    text: navItems.Geography,
    icon: <PublicOutlined />,
  },
  {
    text: navItems.SalesCharts,
    icon: null,
  },
  {
    text: navItems.Overview,
    icon: <PointOfSaleOutlined />,
  },
  {
    text: navItems.Daily,
    icon: <TodayOutlined />,
  },
  {
    text: navItems.Monthly,
    icon: <CalendarMonthOutlined />,
  },
  {
    text: navItems.Breakdown,
    icon: <PieChartOutlined />,
  },
  {
    text: navItems.Management,
    icon: null,
  },
  {
    text: navItems.Admin,
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: navItems.Performance,
    icon: <TrendingUpOutlined />,
  },
];