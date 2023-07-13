import React from "react";
import Header from "../../../common/Header/Header";
import { useGetProductsQuery } from "../../../../features/api";
import ProductCard from "./ProductCard/ProductCard";
import { IIsMaxWidth1025 } from "../../../../types/maxWidth";
import { IUseGetProductsQueryResult } from "../../../../types/clientFacing";
import { labels } from "../../../../shared/constants/labels";
import { BoxStyled, TypographyStyled } from "./Products.styles";
import { StyledBoxContainer } from "../../../../assets/styles/globalComponents.styles";

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
