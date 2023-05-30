import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
} from '@mui/material';
import { IProduct } from '../Products';
import {
  CardStyled,
  CollapseStyled,
  TypographyCategoryStyled,
  TypographyPriceStyled,
} from './ProductCard.styles';

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
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CardStyled>
      <CardContent>
        <TypographyCategoryStyled gutterBottom>
          {category}
        </TypographyCategoryStyled>
        <Typography variant="h5">{name}</Typography>
        <TypographyPriceStyled>
          ${Number(price).toFixed(2)}
        </TypographyPriceStyled>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <CollapseStyled in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat[0].yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat[0].yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </CollapseStyled>
    </CardStyled>
  );
};

export default ProductCard;
