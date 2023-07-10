import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DailySales from "./DailySales";
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
          <DailySales isMaxWidth600px={false} />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("should render header title and subtitle", () => {
    const headerTitle = screen.getByText(labels.dailySales.headerTitle);
    const headerSubtitle = screen.getByText(labels.dailySales.headerSubtitle);

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });

  describe("initial date state", () => {
    it("should set the initialDate states", async () => {
      const initialDateInput = screen.getByText(
        labels.dailySales.initialStartDate
      );
      expect(initialDateInput).toBeInTheDocument();

      const endDateInput = screen.getByText(labels.dailySales.initialEndDate);
      expect(endDateInput).toBeInTheDocument();
    });

    it("should change start date state correctly when the onChange function is called", async () => {
      const startDateButton = screen.getByRole("button", {
        name: labels.dailySales.initialStartDate,
      });
      expect(startDateButton).toBeInTheDocument();

      fireEvent.click(startDateButton);
      const selectedStartDate = await screen.findByLabelText(
        /Choose Sunday, January 2nd, 2022/i
      );
      fireEvent.click(selectedStartDate);
      expect(
        screen.getByRole("button", { name: /01\/02\/2022/i })
      ).toBeInTheDocument();
    });

    it("should change end date state correctly when the onChange function is called", async () => {
      const endDateButton = screen.getByRole("button", {
        name: labels.dailySales.initialEndDate,
      });
      expect(endDateButton).toBeInTheDocument();

      fireEvent.click(endDateButton);
      const selectedEndDate = await screen.findByLabelText(
        /Choose Saturday, January 15th, 2022/i
      );
      fireEvent.click(selectedEndDate);
      expect(
        screen.getByRole("button", { name: /01\/15\/2022/i })
      ).toBeInTheDocument();
    });
  });
});
