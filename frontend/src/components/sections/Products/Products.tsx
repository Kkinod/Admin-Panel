import React from "react";
import Header from "../../Header/Header";
import { useGetProductsQuery } from "../../../features/api";
import ProductCard from "./ProductCard/ProductCard";
import { BoxStyled, TypographyStyled } from "./Products.styles";
import { StyledBoxContainer } from "../../../assets/styles/globalComponents.styles";
import { labels } from "../../../utils/labels";

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

export interface IProducts {
  isXsDown1025: boolean;
}

const Products = ({ isXsDown1025 }: IProducts) => {
  const { data, isLoading } =
    useGetProductsQuery<IUseGetProductsQueryResult>(null);

  return (
    <StyledBoxContainer>
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {!isLoading ? (
        data && data.length > 0 ? (
          <BoxStyled isXsDown1025={isXsDown1025}>
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
          </BoxStyled>
        ) : (
          <TypographyStyled variant="h4">No product found</TypographyStyled>
        )
      ) : (
        <>{labels.default.loading}</>
      )}
    </StyledBoxContainer>
  );
};

export default Products;
