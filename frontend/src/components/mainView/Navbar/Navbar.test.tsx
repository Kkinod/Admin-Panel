import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { setMode } from '../../../features/globalSlice';
import Navbar from './Navbar';
import { themeSettings } from '../../../assets/styles/theme';

const originalTheme = themeSettings('light');

const mappedTheme = createTheme({
  ...originalTheme,
  palette: {
    primary: {
      main:
        '100' in originalTheme.palette.primary
          ? originalTheme.palette.primary['100']
          : originalTheme.palette.primary.main,
    },
    secondary: {
      main:
        '200' in originalTheme.palette.secondary
          ? originalTheme.palette.secondary['200']
          : originalTheme.palette.secondary.main,
    },
    background: originalTheme.palette.background,
    mode: originalTheme.palette.mode,
  },
});

jest.mock('../../../features/globalSlice', () => ({
  setMode: jest.fn(() => ({ type: 'SET_MODE' })),
}));

describe('Navbar', () => {
  const mockFunction = jest.fn();
  const user = {
    _id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password',
    city: 'City',
    country: 'Country',
    occupation: 'Occupation',
    phoneNumber: '123456789',
    role: 'user',
  };

  beforeEach(() => {
    const initialState = {
      global: {
        darkLightMode: 'light',
        userId: '644d2c50e7b49752f4a34c6b',
      },
    };

    const mockStore = configureMockStore();
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ThemeProvider theme={mappedTheme}>
          <Navbar
            isSidebarOpen={false}
            setIsSidebarOpen={mockFunction}
            isNonMobile={false}
            user={user}
          />
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

  it('should call the mockFunction when the sidebar button is clicked', () => {
    const sidebarButton = screen.getByRole('button', {
      name: /open\/close sidebar/i,
    });
    fireEvent.click(sidebarButton);

    expect(mockFunction).toHaveBeenCalled();
  });
});
