import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { RootState } from "./features/store";
import Dashboard from "./components/mainView/Dashboard/Dashboard";
import { themeSettings } from "./assets/styles/theme";
import Layout from "./components/mainView/Layout/Layout";
import { GlobalStyle } from "./assets/styles/globalStyles.styles";
import Products from "./components/sections/Products/Products";
import Transactions from "./components/sections/Transactions/Transactions";
import Users from "./components/sections/Users/Users";
import SingleUser from "./components/sections/Users/SingleUser/SingleUser";
import { generateColumns } from "./utils/columns/usersColumns/usersColumns";

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
                        element={<Navigate to="/dashboard" replace />}
                     />
                     <Route path="/dashboard" element={<Dashboard />} />
                     <Route path="/products" element={<Products />} />
                     <Route path="/transactions" element={<Transactions />} />
                     <Route
                        path="/users"
                        element={
                           <Users
                              isMaxWidth600px={isMaxWidth600px}
                              isXsDown1025={isXsDown1025}
                           />
                        }
                     />
                     <Route
                        path="/user/:id"
                        element={
                           <SingleUser
                              columns={generateColumns({
                                 includeRoleColumn: true,
                              })}
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
