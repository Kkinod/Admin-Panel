import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  SettingsOutlined,
  TodayOutlined,
  TrendingUpOutlined,
  Groups2Outlined,
  PieChartOutlined,
} from '@mui/icons-material';
import { FlexBetween } from './Sidebar.styles';

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
  const theme = useTheme();

  //   const active = useMemo(() => pathname.substring(1), [pathname]);
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <MuiDrawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    Mr. WOODENFLOOR
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText ? 'red' : 'transparent',
                        color: active === lcText ? 'green' : 'blue',
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color: active === lcText ? 'green' : 'yellow',
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </MuiDrawer>
      )}
    </Box>
  );
};

export default Sidebar;
