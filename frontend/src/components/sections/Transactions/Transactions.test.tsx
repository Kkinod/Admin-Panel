import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithProviders } from "../../../testUtils/renderWithProviders";
import Transactions from "./Transactions";
import { QueryClient, QueryClientProvider } from "react-query";
import { screen } from "@testing-library/react";
import { mockedTransactionsData } from "../../../testUtils/mockedData";

jest.mock("../../../features/api", () => ({
  useGetTransactionsQuery: jest.fn(() => ({
    data: [mockedTransactionsData],
    isLoading: false,
  })),
}));

describe("Transactions component", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Transactions isMaxWidth600px={false} isXsDown1025={false} />
      </QueryClientProvider>
    );
  });

  it("should render header title and subtitle", () => {
    const headerTitle = screen.getByText("TRANSACTIONS");
    const headerSubtitle = screen.getByText("Entire list of transactions");

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });
});
