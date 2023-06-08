import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { RootState } from './features/store';
import Dashboard from './components/mainView/Dashboard/Dashboard';
import { themeSettings } from './assets/styles/theme';
import Layout from './components/mainView/Layout/Layout';
import { GlobalStyle } from './assets/styles/globalStyle.styles';
import Products from './components/sections/Products/Products';
import Transactions from './components/sections/Transactions/Transactions';

function App() {
  const mode = useSelector((state: RootState) => state.global.darkLightMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/transactions" element={<Transactions />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
