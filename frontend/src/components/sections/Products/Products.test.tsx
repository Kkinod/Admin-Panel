import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import Products from './Products';

import { mockedProductData } from '../../../testUtils/mockedData';
import { renderWithProviders } from '../../../testUtils/renderWithProviders';

jest.mock('../../../features/api', () => ({
  useGetProductsQuery: jest.fn(() => ({
    data: [mockedProductData],
    isLoading: false,
  })),
}));

describe('Products', () => {
  beforeEach(() => {
    const queryClient = new QueryClient();

    renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    );
  });

  it('renders header', () => {
    const headerTitle = screen.getByText('PRODUCTS');
    const headerSubtitle = screen.getByText('See your list of products.');

    expect(headerTitle).toBeInTheDocument();
    expect(headerSubtitle).toBeInTheDocument();
  });
});
