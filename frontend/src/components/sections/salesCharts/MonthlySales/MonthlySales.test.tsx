import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import MonthlySales from "./MonthlySales";
import { useGetSalesQuery } from "../../../../features/api";
import { renderWithProviders } from "../../../../shared/testUtils/renderWithProviders";
import { mockOverviewData } from "../../../../shared/testUtils/mockedData";
import { labels } from "../../../../shared/constants/labels";

jest.mock("../../../../features/api", () => ({
  useGetSalesQuery: jest.fn(),
}));

jest.mock("@nivo/line", () => {
  return {
    ResponsiveLine: () => <div>MockedResponsiveLine</div>,
  };
});

describe("Monthly Component", () => {
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
          <MonthlySales isMaxWidth600px={false} />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("should render header title and subtitle", () => {
    const headerTitle = screen.getByText(labels.monthlySales.headerTitle);
    const headerSubtitle = screen.getByText(labels.monthlySales.headerSubtitle);

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });
});
