import React, { useState } from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Header from '../../Header/Header';
import { useGetProductsQuery } from '../../../features/api';

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

interface IProduct {
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

const Product = ({
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
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary.dark}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: '1.5rem' }} color={theme.palette.secondary.main}>
          ${Number(price).toFixed(2)}
        </Typography>
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
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.grey[100],
        }}
      >
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
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } =
    useGetProductsQuery<IUseGetProductsQueryResult>(null);
  console.log('data', data);

  const isNonMobile = useMediaQuery('(min-width: 1000px)');

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {data || !isLoading ? (
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
              <Product
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
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;

// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardActions,
//   CardContent,
//   Collapse,
//   Button,
//   Typography,
//   Rating,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import Header from '../../Header/Header';
// import { useGetProductsQuery } from '../../../features/api';

// interface IProduct {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   rating: number;
//   category: string;
//   supply: number;
//   stat: {
//     _id: string;
//     yearlySalesTotal: number;
//     yearlyTotalSoldUnits: number;
//     createdAt: Date;
//     updatedAt: Date;
//   };
// }

// const Product = ({
//   _id,
//   name,
//   description,
//   price,
//   rating,
//   category,
//   supply,
//   stat,
// }: IProduct) => {
//   const theme = useTheme();
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <Card
//       sx={{
//         backgroundImage: 'none',
//         backgroundColor: theme.palette.background.alt,
//         borderRadius: '0.55rem',
//       }}
//     >
//       <CardContent>
//         <Typography
//           sx={{ fontSize: 14 }}
//           color={theme.palette.secondary.dark}
//           gutterBottom
//         >
//           {category}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {name}
//         </Typography>
//         <Typography sx={{ mb: '1.5rem' }} color={theme.palette.secondary.main}>
//           ${Number(price).toFixed(2)}
//         </Typography>
//         <Rating value={rating} readOnly />

//         <Typography variant="body2">{description}</Typography>
//       </CardContent>
//       <CardActions>
//         <Button
//           variant="primary"
//           size="small"
//           onClick={() => setIsExpanded(!isExpanded)}
//         >
//           See More
//         </Button>
//       </CardActions>
//       <Collapse
//         in={isExpanded}
//         timeout="auto"
//         unmountOnExit
//         sx={{
//           color: theme.palette.grey[100],
//         }}
//       >
//         <CardContent>
//           <Typography>id: {_id}</Typography>
//           <Typography>Supply Left: {supply}</Typography>
//           <Typography>
//             Yearly Sales This Year: {stat.yearlySalesTotal}
//           </Typography>
//           <Typography>
//             Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery();
//   const isNonMobile = useMediaQuery('(min-width: 1000px)');

//   return (
//     <Box m="1.5rem 2.5rem">
//       <Header title="PRODUCTS" subtitle="See your list of products." />
//       {data || !isLoading ? (
//         <Box
//           mt="20px"
//           display="grid"
//           gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//           justifyContent="space-between"
//           rowGap="20px"
//           columnGap="1.33%"
//           sx={{
//             '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
//           }}
//         >
//           {data.map(
//             ({
//               _id,
//               name,
//               description,
//               price,
//               rating,
//               category,
//               supply,
//               stat,
//             }) => (
//               <Product
//                 key={_id}
//                 _id={_id}
//                 name={name}
//                 description={description}
//                 price={price}
//                 rating={rating}
//                 category={category}
//                 supply={supply}
//                 stat={stat}
//               />
//             )
//           )}
//         </Box>
//       ) : (
//         <>Loading...</>
//       )}
//     </Box>
//   );
// };

// export default Products;
