import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { setMode } from '../../features/globalSlice';
import { store } from '../../features/store';
import Navbar from './Navbar';
import { themeSettings } from '../../assets/styles/theme';

const originalTheme = themeSettings('light');

const mappedTheme = createTheme({
  ...originalTheme,
  palette: {
    ...originalTheme.palette,
    primary: {
      main: (originalTheme.palette.primary as { [key: string]: string })['100'],
    },
    secondary: {
      main: (originalTheme.palette.secondary as { [key: string]: string })[
        '200'
      ],
    },
  },
});

jest.mock('../../features/globalSlice', () => ({
  setMode: jest.fn(() => ({ type: 'SET_MODE' })),
}));

describe('Navbar', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={mappedTheme}>
          <Navbar />
        </ThemeProvider>
      </Provider>
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

  // it('should logs a message when the sidebar button is clicked', () => {
  //   const sidebarButton = screen.getByRole('button', {
  //     name: /open\/close sidebar/i,
  //   });
  //   const consoleLogSpy = jest
  //     .spyOn(console, 'log')
  //     // eslint-disable-next-line @typescript-eslint/no-empty-function
  //     .mockImplementation(() => {});
  //   fireEvent.click(sidebarButton);

  //   expect(consoleLogSpy).toHaveBeenCalledWith('open/close sidebar');
  //   consoleLogSpy.mockRestore();
  // });
});
