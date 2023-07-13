import React, { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { labels } from "../../../../../shared/constants/labels";
import { IProduct } from "../../../../../types/clientFacing";
import {
  CardContentStyled,
  CardStyled,
  CollapseStyled,
  StyledTypographyCategory,
  StyledTypographyDescription,
  StyledTypographyPrice,
} from "./ProductCard.styles";

const ProductCard = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}: IProduct) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CardStyled>
      <CardContentStyled>
        <StyledTypographyCategory gutterBottom>
          {category}
        </StyledTypographyCategory>
        <Typography variant="h5">{name}</Typography>
        <StyledTypographyPrice>
          ${Number(price).toFixed(2)}
        </StyledTypographyPrice>
        <Rating value={rating} readOnly />
        <StyledTypographyDescription variant="body2">
          {description}
        </StyledTypographyDescription>
      </CardContentStyled>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {labels.products.buttonProductsCard}
        </Button>
      </CardActions>
      <CollapseStyled in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{`${labels.default.id}: ${_id}`}</Typography>
          <Typography>{`${labels.products.supplyLeft}: ${supply}`}</Typography>
          <Typography>
            {`${labels.products.annualSales}: ${stat[0].yearlySalesTotal}`}
          </Typography>
          <Typography>
            {`${labels.products.annualUnitsSold}: ${stat[0].yearlyTotalSoldUnits}`}
          </Typography>
        </CardContent>
      </CollapseStyled>
    </CardStyled>
  );
};

export default ProductCard;
