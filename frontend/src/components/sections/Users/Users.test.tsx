import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, useLocation } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { mockedUsersData } from "../../../testUtils/mockedData";
import { renderWithProviders } from "../../../testUtils/renderWithProviders";
import { useGetUsersQuery } from "../../../features/api";
import { labels } from "../../../utils/labels";
import Users from "./Users";

jest.mock("../../../features/api", () => ({
  useGetUsersQuery: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/user/1",
  }),
}));

describe("Users component", () => {
  describe("with mocked data", () => {
    describe("at full resolution", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetUsersQuery } = require("../../../features/api");
        useGetUsersQuery.mockImplementation(() => ({
          data: [mockedUsersData],
          isLoading: false,
        }));

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

      it('should redirect to correct user page when button "View" is clicked', async () => {
        const _id = "1";
        const btn = screen.getByText(labels.default.buttonView);
        expect(btn).toBeInTheDocument();

        fireEvent.click(btn);
        const location = useLocation();
        await waitFor(() => {
          expect(location.pathname).toBe(`/user/${_id}`);
        });
      });
    });

    describe("with a width of resolution below 600px", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetUsersQuery } = require("../../../features/api");
        useGetUsersQuery.mockImplementation(() => ({
          data: [mockedUsersData],
          isLoading: false,
        }));

        renderWithProviders(
          <MemoryRouter>
            <QueryClientProvider client={queryClient}>
              <Users isMaxWidth600px={true} isXsDown1025={true} />
            </QueryClientProvider>
          </MemoryRouter>
        );
      });

      it("should only display Name and Action columns", () => {
        const nameColumn = screen.queryByRole("columnheader", {
          name: "Name",
        });
        expect(nameColumn).toBeInTheDocument();

        const idColumn = screen.queryByRole("columnheader", {
          name: "ID",
        });
        expect(idColumn).not.toBeInTheDocument();

        const emailColumn = screen.queryByRole("columnheader", {
          name: "Email",
        });
        expect(emailColumn).not.toBeInTheDocument();

        const phoneNumberColumn = screen.queryByRole("columnheader", {
          name: "Phone number",
        });
        expect(phoneNumberColumn).not.toBeInTheDocument();

        const countryColumn = screen.queryByRole("columnheader", {
          name: "Country",
        });
        expect(countryColumn).not.toBeInTheDocument();

        const actionColumn = screen.queryByRole("columnheader", {
          name: "Action",
        });
        expect(actionColumn).toBeInTheDocument();
      });
    });
  });

  describe("without mocked data", () => {
    describe("and with isLoading = false", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetUsersQuery } = require("../../../features/api");
        useGetUsersQuery.mockImplementation(() => ({
          data: [],
          isLoading: false,
        }));

        renderWithProviders(
          <MemoryRouter>
            <QueryClientProvider client={queryClient}>
              <Users isMaxWidth600px={false} isXsDown1025={false} />
            </QueryClientProvider>
          </MemoryRouter>
        );
      });

      it("should display no data message when there are no users", () => {
        const noDataMessage = screen.queryByText(labels.users.noUsersInfo);
        expect(noDataMessage).toBeInTheDocument();
      });
    });

    describe("and with isLoading = true", () => {
      beforeEach(() => {
        const queryClient = new QueryClient();

        const { useGetUsersQuery } = require("../../../features/api");
        useGetUsersQuery.mockImplementation(() => ({
          isLoading: true,
        }));

        renderWithProviders(
          <MemoryRouter>
            <QueryClientProvider client={queryClient}>
              <Users isMaxWidth600px={false} isXsDown1025={false} />
            </QueryClientProvider>
          </MemoryRouter>
        );
      });

      it("should display progressbar", () => {
        const loading = screen.getByRole("progressbar");
        expect(loading).toBeInTheDocument();
      });
    });
  });
});
