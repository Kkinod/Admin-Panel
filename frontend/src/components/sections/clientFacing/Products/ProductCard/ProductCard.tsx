import React, { useState } from "react";
import {
  Button,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import { IProduct } from "../Products";
import {
  CardContentStyled,
  CardStyled,
  CollapseStyled,
  TypographyCategoryStyled,
  TypographyPriceStyled,
} from "./ProductCard.styles";
import { labels } from "../../../../../shared/constants/labels";

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
        <TypographyCategoryStyled gutterBottom>
          {category}
        </TypographyCategoryStyled>
        <Typography variant="h5">{name}</Typography>
        <TypographyPriceStyled>
          ${Number(price).toFixed(2)}
        </TypographyPriceStyled>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
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
