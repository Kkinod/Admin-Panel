import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CategorySales from "./CategorySales";
import { useGetSalesQuery } from "../../../../features/api";
import { renderWithProviders } from "../../../../testUtils/renderWithProviders";
import { mockOverviewData } from "../../../../testUtils/mockedData";
import { labels } from "../../../../utils/labels";

jest.mock("../../../../features/api", () => ({
  useGetSalesQuery: jest.fn(),
}));

jest.mock("@nivo/pie", () => {
  return {
    ResponsivePie: () => <div>MockedResponsivePie</div>,
  };
});

describe("Category Component", () => {
  describe("with mocked data", () => {
    beforeEach(() => {
      const queryClient = new QueryClient();

      const { useGetSalesQuery } = require("../../../../features/api");
      useGetSalesQuery.mockImplementation(() => ({
        data: mockOverviewData,
        isLoading: false,
      }));

      renderWithProviders(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <CategorySales isMaxWidth600px={false} />
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    it("should render header title and subtitle", () => {
      const headerTitle = screen.getByText(labels.categorySales.headerTitle);
      const headerSubtitle = screen.getByText(
        labels.categorySales.headerSubtitle
      );

      expect(headerTitle).toBeInTheDocument();
      expect(headerSubtitle).toBeInTheDocument();
    });

    it("should not display information about missing data", () => {
      const noDataInformation = screen.queryByText(labels.charts.noDataInfo);
      expect(noDataInformation).toBeNull();
    });
  });

  describe("without mocked data", () => {
    beforeEach(() => {
      const queryClient = new QueryClient();

      const { useGetSalesQuery } = require("../../../../features/api");
      useGetSalesQuery.mockImplementation(() => ({
        data: undefined,
        isLoading: false,
      }));

      renderWithProviders(
        <MemoryRouter>
          <QueryClientProvider client={queryClient}>
            <CategorySales isMaxWidth600px={false} />
          </QueryClientProvider>
        </MemoryRouter>
      );
    });

    it("should display information about missing data", () => {
      const noDataInformation = screen.getByText(labels.charts.noDataInfo);
      expect(noDataInformation).toBeInTheDocument();
    });
  });
});
