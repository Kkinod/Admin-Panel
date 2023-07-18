import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import Overview from "./Overview";
import { QueryClient, QueryClientProvider } from "react-query";
import { useGetSalesQuery } from "../../../../features/api";
import { mockOverviewData } from "../../../../shared/testUtils/mockedData";
import { renderWithProviders } from "../../../../shared/testUtils/renderWithProviders";
import { MemoryRouter } from "react-router-dom";
import { labels } from "../../../../shared/constants/labels";

jest.mock("../../../features/api", () => ({
  useGetSalesQuery: jest.fn(),
}));

jest.mock("@nivo/line", () => {
  return {
    ResponsiveLine: () => <div>MockedResponsiveLine</div>,
  };
});

describe("Overview Component", () => {
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
          <Overview isMaxWidth600px={false} isMaxWidth1025={false} />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("should render header title and subtitle", () => {
    const headerTitle = screen.getByText(labels.overview.headerTitle);
    const headerSubtitle = screen.getByText(labels.overview.headerSubtitle);

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });

  it('should initialize with "units" as the default state', () => {
    const labelView = screen.getByLabelText("View");
    expect(labelView).toBeInTheDocument();
  });

  test("dropdown menu expands with 'Units' and 'Sales' options", () => {
    const selectElement = screen.getByLabelText("View");
    fireEvent.mouseDown(selectElement);

    const unitsOption = screen.getByRole("option", {
      name: labels.overview.valueUnits,
    });
    const salesOption = screen.getByRole("option", {
      name: labels.overview.valueSales,
    });

    expect(unitsOption).toBeInTheDocument();
    expect(salesOption).toBeInTheDocument();
  });
});
