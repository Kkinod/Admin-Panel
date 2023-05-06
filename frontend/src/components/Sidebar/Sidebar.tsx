import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';
import {
  Container,
  FlexBetween,
  LogoBox,
  StyledChevronRightOutlined,
  StyledDrawer,
  StyledListItemButton,
  StyledListItemIcon,
  StyledTypography,
  TypographyBox,
} from './Sidebar.styles';

const navItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Client Facing',
    icon: null,
  },
  {
    text: 'Products',
    icon: <ShoppingCartOutlined />,
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transactions',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Geography',
    icon: <PublicOutlined />,
  },
  {
    text: 'Sales',
    icon: null,
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutlined />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Performance',
    icon: <TrendingUpOutlined />,
  },
];
interface ISidebar {
  drawerWidth: string;
  isNonMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  //   user: { data: (typeof dataUser)[0] } | {};
}

const Sidebar = ({
  drawerWidth,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: ISidebar) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <StyledDrawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          isNonMobile={isNonMobile}
          drawerWidth={drawerWidth}
        >
          <Container>
            <LogoBox>
              <FlexBetween>
                <TypographyBox>
                  <Typography variant="h4" fontWeight="bold">
                    Mr. WOODENFLOOR
                  </Typography>
                </TypographyBox>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </LogoBox>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return <StyledTypography key={text}>{text}</StyledTypography>;
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <StyledListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      lcText={lcText}
                      active={active}
                    >
                      <StyledListItemIcon lcText={lcText} active={active}>
                        {icon}
                      </StyledListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && <StyledChevronRightOutlined />}
                    </StyledListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Container>
        </StyledDrawer>
      )}
    </Box>
  );
};

export default Sidebar;
