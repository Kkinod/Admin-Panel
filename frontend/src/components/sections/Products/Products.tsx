import React from "react";
import Header from "../../Header/Header";
import { useGetProductsQuery } from "../../../features/api";
import ProductCard from "./ProductCard/ProductCard";
import { IIsMaxWidth1025 } from "../../../App";
import { labels } from "../../../utils/labels";
import { BoxStyled, TypographyStyled } from "./Products.styles";
import { StyledBoxContainer } from "../../../assets/styles/globalComponents.styles";

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

const Products = ({ isMaxWidth1025 }: IIsMaxWidth1025) => {
  const { data, isLoading } =
    useGetProductsQuery<IUseGetProductsQueryResult>(null);

  return (
    <StyledBoxContainer>
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {!isLoading ? (
        data && data.length > 0 ? (
          <BoxStyled isMaxWidth1025={isMaxWidth1025}>
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
          <TypographyStyled variant="h4">
            {labels.products.noProducts}
          </TypographyStyled>
        )
      ) : (
        <>{labels.default.loading}</>
      )}
    </StyledBoxContainer>
  );
};

export default Products;
