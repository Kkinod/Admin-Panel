import { IProduct, ITransactionData } from "../../types/clientFacing";
import { IUsersData } from "../../types/users";

export const mockedProductData: IProduct = {
  _id: "123",
  name: "Product Name",
  description: "Product Description",
  price: 9.99,
  rating: 4,
  category: "Category",
  supply: 10,
  stat: [
    {
      _id: "456",
      __v: 1,
      yearlySalesTotal: 100,
      yearlyTotalSoldUnits: 50,
      createdAt: "2023-05-25",
      monthlyData: [
        { _id: "789", month: "January", totalSales: 10 },
        { _id: "890", month: "February", totalSales: 20 },
        { _id: "901", month: "March", totalSales: 30 },
        { _id: "012", month: "April", totalSales: 40 },
        { _id: "123", month: "May", totalSales: 50 },
      ],
      productId: "123",
      updatedAt: "2023-05-25",
    },
  ],
};

export const mockedUserData = {
  _id: "1",
  name: "John Doe",
  email: "john@example.com",
  password: "password",
  city: "City",
  country: "Country",
  occupation: "Occupation",
  phoneNumber: "123456789",
  role: "user",
};

export const mockedTransactionsData: ITransactionData = {
  _id: "987",
  userId: "123",
  cost: 2944.24,
  products: ["1", "2", "3", "4", "5"],
  createdAt: "2023-06-07",
};

export const mockedUsersData: IUsersData = {
  _id: "1",
  name: "user1",
  email: "user1@user.com",
  city: "NY",
  state: null,
  country: "US",
  occupation: "Self-employed",
  phoneNumber: "(959) 498-3947",
  transactions: ["123456"],
  role: "user",
  createdAt: "2023-05-13",
  updatedAt: "2023-05-14",
};

export const mockOverviewData = {
  createdAt: "2023-01-10T18:53:05.874Z",
  totalCustomers: 111,
  yearlySalesTotal: 22222,
  yearlyTotalSoldUnits: 3333,
  year: 2023,
  _id: "1",
  monthlyData: [
    {
      month: "January",
      totalSales: 11,
      totalUnits: 22,
      _id: "2",
    },
    {
      month: "February",
      totalSales: 33,
      totalUnits: 33,
      _id: "3",
    },
    {
      month: "March",
      totalSales: 44,
      totalUnits: 44,
      _id: "4",
    },
  ],
  dailyData: [
    {
      month: "2022-01-01",
      totalSales: 1,
      totalUnits: 2,
      _id: "5",
    },
    {
      month: "2022-01-02",
      totalSales: 3,
      totalUnits: 3,
      _id: "6",
    },
    {
      month: "2022-01-03",
      totalSales: 4,
      totalUnits: 4,
      _id: "7",
    },
  ],
  salesByCategory: {
    accessories: 1111,
    hardwood: 1111,
    panels: 1111,
    woodenfloor: 1111,
  },
};
