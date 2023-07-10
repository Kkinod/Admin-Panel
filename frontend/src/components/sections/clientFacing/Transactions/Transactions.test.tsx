import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { screen } from "@testing-library/react";
import { mockedTransactionsData } from "../../../../shared/testUtils/mockedData";
import { renderWithProviders } from "../../../../shared/testUtils/renderWithProviders";
import Transactions from "./Transactions";
import { useGetTransactionsQuery } from "../../../../features/api";
import { labels } from "../../../../shared/constants/labels";

jest.mock("../../../features/api", () => ({
  useGetTransactionsQuery: jest.fn(),
}));

describe("Transactions component", () => {
  describe("with mocked data", () => {
    describe("at full resolution", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetTransactionsQuery } = require("../../../../features/api");
        useGetTransactionsQuery.mockImplementation(() => ({
          data: {
            total: 2,
            transactions: [mockedTransactionsData],
          },
          isLoading: false,
        }));

        renderWithProviders(
          <QueryClientProvider client={queryClient}>
            <Transactions isMaxWidth600px={false} isMaxWidth1025={false} />
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

      it("should displays transaction data", () => {
        expect(
          screen.getByText(mockedTransactionsData._id)
        ).toBeInTheDocument();
        expect(
          screen.getByText(mockedTransactionsData.userId)
        ).toBeInTheDocument();
        expect(
          screen.getByText(mockedTransactionsData.createdAt)
        ).toBeInTheDocument();
        expect(screen.getByText("# of Products")).toBeInTheDocument();
        expect(
          screen.getByText(`$${mockedTransactionsData.cost}`)
        ).toBeInTheDocument();
      });
    });

    describe("with a width of resolution below 600px", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        renderWithProviders(
          <QueryClientProvider client={queryClient}>
            <Transactions isMaxWidth600px={true} isMaxWidth1025={true} />
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
  });

  describe("without mocked data", () => {
    describe("and with isLoading = false", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetTransactionsQuery } = require("../../../../features/api");
        useGetTransactionsQuery.mockImplementation(() => ({
          data: {
            total: 0,
            transactions: [],
          },
          isLoading: false,
        }));

        renderWithProviders(
          <QueryClientProvider client={queryClient}>
            <Transactions isMaxWidth600px={false} isMaxWidth1025={false} />
          </QueryClientProvider>
        );
      });

      it("should display no data message when there are no transactions", () => {
        const noDataMessage = screen.queryByText(
          labels.transactions.noTransactionsInfo
        );
        expect(noDataMessage).toBeInTheDocument();
      });
    });

    describe("and with isLoading = true", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetTransactionsQuery } = require("../../../../features/api");
        useGetTransactionsQuery.mockImplementation(() => ({
          isLoading: true,
        }));

        renderWithProviders(
          <QueryClientProvider client={queryClient}>
            <Transactions isMaxWidth600px={false} isMaxWidth1025={false} />
          </QueryClientProvider>
        );
      });

      it("should display progressbar", () => {
        const loading = screen.getByRole("progressbar");
        expect(loading).toBeInTheDocument();
      });
    });
  });
});
