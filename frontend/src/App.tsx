import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { RootState } from './features/store';
import { themeSettings } from './assets/theme';

function App() {
  const mode = useSelector((state: RootState) => state.global.darkLightMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}></ThemeProvider>
      <CssBaseline />
      asdasdasdas
    </div>
  );
}

export default App;
