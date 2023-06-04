import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { setMode } from '../../../features/globalSlice';
import { mappedTheme } from '../../../testUtils/testUtils';
import Navbar from './Navbar';
import { mockedUserData } from '../../../testUtils/mockedData';
import { renderWithProviders } from '../../../testUtils/renderWithProviders';

jest.mock('../../../features/globalSlice', () => ({
  setMode: jest.fn(() => ({ type: 'SET_MODE' })),
}));

describe('Navbar', () => {
  const mockFunction = jest.fn();

  beforeEach(() => {
    renderWithProviders(
      <ThemeProvider theme={mappedTheme}>
        <Navbar
          isSidebarOpen={false}
          setIsSidebarOpen={mockFunction}
          isNonMobile={false}
          user={mockedUserData}
        />
      </ThemeProvider>
    );
  });

  it('should renders search input and buttons', () => {
    const searchInput = screen.getByPlaceholderText('Search...');
    const searchButton = screen.getByRole('button', { name: /search/i });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should renders theme switch button and settings button', () => {
    const themeSwitchButton = screen.getByRole('button', { name: /theme/i });
    const settingsButton = screen.getByRole('button', { name: /settings/i });

    expect(themeSwitchButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });

  it('should dispatches setMode action when theme switch button is clicked', () => {
    const themeSwitchButton = screen.getByRole('button', { name: /theme/i });
    fireEvent.click(themeSwitchButton);

    expect(setMode).toHaveBeenCalled();
  });

  it('should call the mockFunction when the sidebar button is clicked', () => {
    const sidebarButton = screen.getByRole('button', {
      name: /open\/close sidebar/i,
    });
    fireEvent.click(sidebarButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});
