import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { screen } from "@testing-library/react";
import { mockedTransactionsData } from "../../../testUtils/mockedData";
import { renderWithProviders } from "../../../testUtils/renderWithProviders";
import Transactions from "./Transactions";

jest.mock("../../../features/api", () => ({
  useGetTransactionsQuery: jest.fn(() => ({
    data: {
      total: 2,
      transactions: [mockedTransactionsData],
    },
    isLoading: false,
  })),
}));

describe("Transactions component at full resolution", () => {
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

  it("should display all columns", () => {
    const idColumn = screen.queryByRole("columnheader", {
      name: "ID",
    });
    expect(idColumn).toBeInTheDocument();

    const userIdColumn = screen.queryByRole("columnheader", {
      name: "User ID",
    });
    expect(userIdColumn).toBeInTheDocument();

    const createdAtColumn = screen.queryByRole("columnheader", {
      name: "Created at",
    });
    expect(createdAtColumn).toBeInTheDocument();

    const productsColumn = screen.queryByRole("columnheader", {
      name: "# of Products",
    });
    expect(productsColumn).toBeInTheDocument();

    const costColumn = screen.queryByRole("columnheader", {
      name: "Cost",
    });
    expect(costColumn).toBeInTheDocument();
  });

  it("displays transaction data", () => {
    expect(screen.getByText(mockedTransactionsData._id)).toBeInTheDocument();
    expect(screen.getByText(mockedTransactionsData.userId)).toBeInTheDocument();
    expect(
      screen.getByText(mockedTransactionsData.createdAt)
    ).toBeInTheDocument();
    expect(screen.getByText("# of Products")).toBeInTheDocument();
    expect(
      screen.getByText(`$${mockedTransactionsData.cost}`)
    ).toBeInTheDocument();
  });
});

describe("Transactions component with a width of resolution below 600px", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Transactions isMaxWidth600px={true} isXsDown1025={true} />
      </QueryClientProvider>
    );
  });

  it("should only display ID, Product and Cost columns", () => {
    const idColumn = screen.queryByRole("columnheader", {
      name: "ID",
    });
    expect(idColumn).toBeInTheDocument();

    const userIdColumn = screen.queryByRole("columnheader", {
      name: "User ID",
    });
    expect(userIdColumn).not.toBeInTheDocument();

    const createdAtColumn = screen.queryByRole("columnheader", {
      name: "Created at",
    });
    expect(createdAtColumn).not.toBeInTheDocument();

    const productsColumn = screen.queryByRole("columnheader", {
      name: "# of Products",
    });
    expect(productsColumn).toBeInTheDocument();

    const costColumn = screen.queryByRole("columnheader", {
      name: "Cost",
    });
    expect(costColumn).toBeInTheDocument();
  });
});
