import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
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
  return (
    <Box component="nav" sx={{ backgroundColor: 'red' }}>
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
                  <Typography variant="h4">Mr. WoodenFoor</Typography>
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
                const lowerCaseText = text.toLowerCase();
                const isActive = useMatch(`/${lowerCaseText}`);
                const activeClassName = isActive ? 'active' : 'inactive';

                return (
                  <ListItem disablePadding key={text}>
                    <NavLink
                      to={`/${lowerCaseText}`}
                      className={activeClassName}
                    >
                      <ListItemButton>
                        <StyledListItemIcon active={isActive}>
                          {icon}
                        </StyledListItemIcon>
                        <ListItemText primary={text} />
                        {isActive && <StyledChevronRightOutlined />}
                      </ListItemButton>
                    </NavLink>
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
