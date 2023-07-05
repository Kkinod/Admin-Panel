import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { screen } from "@testing-library/react";
import Products from "./Products";
import { mockedProductData } from "../../../testUtils/mockedData";
import { renderWithProviders } from "../../../testUtils/renderWithProviders";

jest.mock("../../../features/api", () => ({
  useGetProductsQuery: jest.fn(() => ({
    data: [mockedProductData],
    isLoading: false,
  })),
}));

describe("Products", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Products isMaxWidth1025 />
      </QueryClientProvider>
    );
  });

  it("should renders header", () => {
    const headerTitle = screen.getByText("PRODUCTS");
    const headerSubtitle = screen.getByText("See your list of products.");

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });

  it("should renders product card", () => {
    const productName = screen.getByText(mockedProductData.name);
    const productDescription = screen.getByText(mockedProductData.description);
    const productPrice = screen.getByText(
      `$${mockedProductData.price.toFixed(2)}`
    );

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });
});
