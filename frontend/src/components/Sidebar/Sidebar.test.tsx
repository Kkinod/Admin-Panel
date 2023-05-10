import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { navItems } from './navItems';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    const { container } = render(<Sidebar isSidebarOpen={true} />, {
      wrapper: MemoryRouter,
    });
    expect(container).toBeInTheDocument();
  });

  it('displays the logo', () => {
    render(<Sidebar isSidebarOpen={true} />, { wrapper: MemoryRouter });
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation items correctly when sidebar is open', () => {
    render(<Sidebar isSidebarOpen={true} />, { wrapper: MemoryRouter });
    navItems.forEach(({ text }) => {
      const navItem = screen.getByText(text);
      expect(navItem).toBeInTheDocument();
    });
  });

  it('navigation items link to correct path', () => {
    render(<Sidebar isSidebarOpen={true} />, { wrapper: MemoryRouter });
    navItems
      .filter(({ icon }) => icon !== null)
      .forEach(({ text }) => {
        const navLink = screen.getByText(text).closest('a');
        expect(navLink).toHaveAttribute('href', `/${text.toLowerCase()}`);
      });
  });

  it('section headers should not be visible when sidebar is closed', () => {
    render(<Sidebar isSidebarOpen={false} />, { wrapper: MemoryRouter });
    navItems
      .filter(({ icon }) => icon === null)
      .forEach(({ text }) => {
        const sectionHeader = screen.queryByText(text);
        expect(sectionHeader).not.toBeVisible();
      });
  });

  it('navigation item icons should be visible when sidebar is closed', () => {
    render(<Sidebar isSidebarOpen={false} />, { wrapper: MemoryRouter });
    navItems
      .filter(({ icon }) => icon !== null)
      .forEach(({ text }) => {
        const icon = screen.getByText(text).closest('a')?.querySelector('svg');
        if (icon) {
          expect(icon).toBeVisible();
        }
      });
  });
});
