import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Header from '../../Header/Header';
import { useGetProductsQuery } from '../../../features/api';
import ProductCard from './ProductCard/ProductCard';
import { TypographyStyled } from './Products.styles';

interface IStatItem {
  month: string;
  totalSales: number;
  _id: string;
}

interface IStatData {
  createdAt: string;
  monthlyData: IStatItem[];
  productId: string;
  updatedAt: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  __v: number;
  _id: string;
}

export interface IProduct {
  category: string;
  description: string;
  name: string;
  price: number;
  rating: number;
  stat: IStatData[];
  supply: number;
  _id: string;
}

interface IUseGetProductsQueryResult {
  data: IProduct[] | undefined;
  isLoading: boolean;
}

const Products = () => {
  const { data, isLoading } =
    useGetProductsQuery<IUseGetProductsQueryResult>(null);
  console.log('data', data);

  const isNonMobile = useMediaQuery('(min-width: 1000px)');

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {!isLoading ? (
        data && data.length > 0 ? (
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
            }}
          >
            {data?.map(
              ({
                _id,
                name,
                description,
                price,
                rating,
                category,
                supply,
                stat,
              }) => (
                <ProductCard
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat}
                />
              )
            )}
          </Box>
        ) : (
          <TypographyStyled variant="h4">No product found</TypographyStyled>
        )
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
