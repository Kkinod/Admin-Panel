import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { screen } from "@testing-library/react";
import Products from "./Products";
import { mockedProductData } from "../../../../shared/testUtils/mockedData";
import { renderWithProviders } from "../../../../shared/testUtils/renderWithProviders";
import { labels } from "../../../../shared/constants/labels";

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
    const headerTitle = screen.getByText(labels.products.headerTitle);
    const headerSubtitle = screen.getByText(labels.products.headerSubtitle);

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
