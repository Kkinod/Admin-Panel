import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { RootState } from "./features/store";
import Dashboard from "./components/mainView/Dashboard/Dashboard";
import Geography from "./components/sections/Geography/Geography";
import Layout from "./components/mainView/Layout/Layout";
import Overview from "./components/sections/Overview/Overview";
import Products from "./components/sections/Products/Products";
import SingleUser from "./components/sections/Users/SingleUser/SingleUser";
import Transactions from "./components/sections/Transactions/Transactions";
import Users from "./components/sections/Users/Users";
import { generateUsersColumns } from "./utils/columns/usersColumns/usersColumns";
import { themeSettings } from "./assets/styles/theme";
import { GlobalStyle } from "./assets/styles/globalStyles.styles";
import { navItems } from "./utils/navItems";

function App() {
  const mode = useSelector((state: RootState) => state.global.darkLightMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isMaxWidth600px = useMediaQuery("(max-width: 600px)");
  const isXsDown1025 = useMediaQuery("(max-width: 1025px)");

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={<Navigate to={`/${navItems.Ecommerce}`} replace />}
              />
              <Route path={`/${navItems.Ecommerce}`} element={<Dashboard />} />
              <Route
                path={`/${navItems.Products}`}
                element={<Products isXsDown1025={isXsDown1025} />}
              />
              <Route
                path={`/${navItems.Orders}`}
                element={
                  <Transactions
                    isMaxWidth600px={isMaxWidth600px}
                    isXsDown1025={isXsDown1025}
                  />
                }
              />
              <Route
                path={`/${navItems.Customers}`}
                element={
                  <Users
                    isMaxWidth600px={isMaxWidth600px}
                    isXsDown1025={isXsDown1025}
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
              <Route path={`/${navItems.Overview}`} element={<Overview />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
