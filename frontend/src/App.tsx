import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { RootState } from "./features/store";
import CategorySales from "./components/sections/salesCharts/CategorySales/CategorySales";
import Customers from "./components/sections/clientFacing/Customers/Customers";
import DailySales from "./components/sections/salesCharts/DailySales/DailySales";
import Ecommerce from "./components/sections/dashboard/Ecommerce/Ecommerce";
import Geography from "./components/sections/clientFacing/Geography/Geography";
import Layout from "./components/mainView/Layout/Layout";
import MonthlySales from "./components/sections/salesCharts/MonthlySales/MonthlySales";
import Overview from "./components/sections/salesCharts/Overview/Overview";
import Products from "./components/sections/clientFacing/Products/Products";
import SingleUser from "./components/sections/management/Users/SingleUser/SingleUser";
import Transactions from "./components/sections/clientFacing/Transactions/Transactions";
import Users from "./components/sections/management/Users/Users";
import { generateUsersColumns } from "./shared/utils/columns/generateUsersColumns/generateUsersColumns";
import { themeSettings } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/globalStyles.styles";
import { navItems } from "./shared/constants/navItems";

function App() {
  const mode = useSelector((state: RootState) => state.global.darkLightMode);
  // @ts-ignore
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isMaxWidth600px = useMediaQuery("(max-width: 600px)");
  const isMaxWidth1025 = useMediaQuery("(max-width: 1025px)");

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <CssBaseline />
          <Routes>
            <Route element={<Layout isMaxWidth600px={isMaxWidth600px} />}>
              <Route
                path="/"
                element={<Navigate to={`/${navItems.Ecommerce}`} replace />}
              />
              <Route
                path={`/${navItems.Ecommerce}`}
                element={
                  <Ecommerce
                    isMaxWidth600px={isMaxWidth600px}
                    isMaxWidth1025={isMaxWidth1025}
                  />
                }
              />
              <Route
                path={`/${navItems.Products}`}
                element={<Products isMaxWidth1025={isMaxWidth1025} />}
              />
              <Route
                path={`/${navItems.Orders}`}
                element={
                  <Transactions
                    isMaxWidth600px={isMaxWidth600px}
                    isMaxWidth1025={isMaxWidth1025}
                  />
                }
              />
              <Route
                path={`/${navItems.Customers}`}
                element={
                  <Customers
                    isMaxWidth600px={isMaxWidth600px}
                    isMaxWidth1025={isMaxWidth1025}
                  />
                }
              />
              <Route
                path={`/${navItems.User}/:id`}
                element={
                  <SingleUser
                    columns={generateUsersColumns({
                      includeRoleColumn: true,
                    })}
                  />
                }
              />
              <Route
                path={`/${navItems.Geography}`}
                element={<Geography isMaxWidth600px={isMaxWidth600px} />}
              />
              <Route
                path={`/${navItems.Overview}`}
                element={<Overview isMaxWidth600px={isMaxWidth600px} />}
              />
              <Route
                path={`/${navItems.Daily}`}
                element={<DailySales isMaxWidth600px={isMaxWidth600px} />}
              />
              <Route
                path={`/${navItems.Monthly}`}
                element={<MonthlySales isMaxWidth600px={isMaxWidth600px} />}
              />
              <Route
                path={`/${navItems.Categories}`}
                element={<CategorySales isMaxWidth600px={isMaxWidth600px} />}
              />
              <Route
                path={`/${navItems.Users}`}
                element={
                  <Users
                    isMaxWidth1025={isMaxWidth1025}
                    isMaxWidth600px={isMaxWidth600px}
                  />
                }
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
