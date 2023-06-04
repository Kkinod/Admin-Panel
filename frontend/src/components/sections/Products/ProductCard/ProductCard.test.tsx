import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { IProduct } from '../Products';

const product: IProduct = {
  _id: '123',
  name: 'Product Name',
  description: 'Product Description',
  price: 9.99,
  rating: 4,
  category: 'Category',
  supply: 10,
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
};

describe('ProductCard', () => {
  it('should renders product details', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByText(product.category)).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${product.price.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: '4 Stars' })).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
  });

  it('should expands and shows additional information', () => {
    render(<ProductCard {...product} />);

    const seeMoreButton = screen.getByRole('button', { name: 'See More' });

    fireEvent.click(seeMoreButton);

    expect(screen.getByText(`id: 123`)).toBeInTheDocument();
    expect(screen.getByText(`Supply Left: 10`)).toBeInTheDocument();
    expect(screen.getByText(`Yearly Sales This Year: 100`)).toBeInTheDocument();
    expect(
      screen.getByText(`Yearly Units Sold This Year: 50`)
    ).toBeInTheDocument();
  });
});
