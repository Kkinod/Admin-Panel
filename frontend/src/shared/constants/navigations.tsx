import { navItems } from "./navItems";

type NavigationItem = {
  path: string;
  label: string;
};

type Navigations = Record<PropertyKey, NavigationItem>;

export const navigations = {
  home: {
    path: "/",
    label: navItems.Home,
  },
  ecommerce: {
    path: `/${navItems.Ecommerce}`,
    label: navItems.Ecommerce,
  },
  products: {
    path: `/${navItems.Products}`,
    label: navItems.Products,
  },
  customers: {
    path: `/${navItems.Customers}`,
    label: navItems.Customers,
  },
  orders: {
    path: `/${navItems.Orders}`,
    label: navItems.Orders,
  },
  geography: {
    path: `/${navItems.Geography}`,
    label: navItems.Geography,
  },
  overview: {
    path: `/${navItems.Overview}`,
    label: navItems.Overview,
  },
  daily: {
    path: `/${navItems.Daily}`,
    label: navItems.Daily,
  },
  monthly: {
    path: `/${navItems.Monthly}`,
    label: navItems.Monthly,
  },
  category: {
    path: `/${navItems.Categories}`,
    label: navItems.Categories,
  },
  usersList: {
    path: `/${navItems.Users}`,
    label: navItems.Users,
  },
  singleUser: {
    path: `/${navItems.User}`,
    label: navItems.User,
  },
} as const satisfies Navigations;
