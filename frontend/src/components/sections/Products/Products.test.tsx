import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Products from './Products';
import { themeSettings } from '../../../assets/styles/theme';
import { ThemeProvider, createTheme } from '@mui/material';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

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

jest.mock('../../../features/api', () => ({
  useGetProductsQuery: jest.fn().mockReturnValue({
    data: [
      {
        _id: '1',
        name: 'Product 1',
        description: 'Product 1 description',
        price: 10,
        rating: 4,
        category: 'Category 1',
        supply: 100,
        stat: [
          {
            _id: '456',
            __v: 1,
            yearlySalesTotal: 100,
            yearlyTotalSoldUnits: 50,
            createdAt: '2023-05-25',
            monthlyData: [
              { _id: '789', month: 'January', totalSales: 10 },
              { _id: '890', month: 'February', totalSales: 20 },
              { _id: '901', month: 'March', totalSales: 30 },
              { _id: '012', month: 'April', totalSales: 40 },
              { _id: '123', month: 'May', totalSales: 50 },
            ],
            productId: '123',
            updatedAt: '2023-05-25',
          },
        ],
      },
    ],
    isLoading: false,
  }),
}));

describe('Products', () => {
  beforeEach(() => {
    const initialState = {
      global: {
        darkLightMode: 'light',
        userId: '644d2c50e7b49752f4a34c6b',
      },
    };

    const mockStore = configureMockStore();
    const store = mockStore(initialState);

    const queryClient = new QueryClient();

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={mappedTheme}>
            <Products />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    );
  });

  test('renders header', () => {
    const headerTitle = screen.getByText('PRODUCTS');
    const headerSubtitle = screen.getByText('See your list of products.');

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });
});
