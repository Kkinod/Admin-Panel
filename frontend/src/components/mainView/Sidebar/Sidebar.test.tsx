import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { sidebarItems } from "../../../shared/constants/sidebarItems";
import { renderWithProviders } from "../../../shared/testUtils/renderWithProviders";

describe("Sidebar", () => {
  it("renders without crashing", () => {
    const { container } = renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={true}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
  });

  it("displays the logo", () => {
    renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={true}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders navigation items correctly when sidebar is open", () => {
    renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={true}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    sidebarItems.forEach(({ text }) => {
      const navItem = screen.getByText(text);
      expect(navItem).toBeInTheDocument();
    });
  });

  it("navigation items link to correct path", () => {
    renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={true}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    sidebarItems
      .filter(({ icon }) => icon !== null)
      .forEach(({ text }) => {
        const navLink = screen.getByText(text).closest("a");
        expect(navLink).toHaveAttribute("href", `/${text.toLowerCase()}`);
      });
  });

  it("section headers should not be visible when sidebar is closed", () => {
    renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={false}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    sidebarItems
      .filter(({ icon }) => icon === null)
      .forEach(({ text }) => {
        const sectionHeader = screen.queryByText(text);
        expect(sectionHeader).not.toBeVisible();
      });
  });

  it("navigation item icons should be visible when sidebar is closed", () => {
    renderWithProviders(
      <MemoryRouter>
        <Sidebar
          isSidebarOpen={false}
          isMaxWidth600px={false}
          setIsSidebarOpen={() => {}}
        />
      </MemoryRouter>
    );

    sidebarItems
      .filter(({ icon }) => icon !== null)
      .forEach(({ text }) => {
        const icon = screen.getByText(text).closest("a")?.querySelector("svg");
        if (icon) {
          expect(icon).toBeVisible();
        }
      });
  });
});
