import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mockedUsersData } from "../../../testUtils/mockedData";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderWithProviders } from "../../../testUtils/renderWithProviders";
import Users from "./Users";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../../features/api", () => ({
  useGetUsersQuery: jest.fn(() => ({
    data: [mockedUsersData],
    isLoading: false,
  })),
}));

describe("Transactions component at full resolution", () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <Users isMaxWidth600px={false} isXsDown1025={false} />
        </QueryClientProvider>
      </MemoryRouter>
    );
  });

  it("should display all columns", () => {
    const nameColumn = screen.queryByRole("columnheader", {
      name: "Name",
    });
    expect(nameColumn).toBeInTheDocument();

    const idColumn = screen.queryByRole("columnheader", {
      name: "ID",
    });
    expect(idColumn).toBeInTheDocument();

    const emailColumn = screen.queryByRole("columnheader", {
      name: "Email",
    });
    expect(emailColumn).toBeInTheDocument();

    const phoneNumberColumn = screen.queryByRole("columnheader", {
      name: "Phone number",
    });
    expect(phoneNumberColumn).toBeInTheDocument();

    const countryColumn = screen.queryByRole("columnheader", {
      name: "Country",
    });
    expect(countryColumn).toBeInTheDocument();

    const actionColumn = screen.queryByRole("columnheader", {
      name: "Action",
    });
    expect(actionColumn).toBeInTheDocument();
  });
});
