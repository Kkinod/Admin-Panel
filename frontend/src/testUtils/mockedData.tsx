import { IProduct } from "../components/sections/Products/Products";
import { ITransaction } from "../components/sections/Transactions/Transactions";

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

export const mockedTransactionsData: ITransaction = {
  _id: "987",
  userId: "123",
  cost: 2944.24,
  products: ["1", "2", "3", "4", "5"],
};
