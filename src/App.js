import {
  useState,
  useEffect,
  Suspense
} from 'react';
import { ThemeProvider } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Router from './Router';
import { ScrollToTop } from './components/ScrollToTop';
import ThemeContext from './contexts/themeContext';
import LoaderContext from './contexts/loaderContext';
import { lightTheme, darkTheme } from './assets/theme';

function App() {
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={ <div></div> }>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <ThemeProvider theme={ isDarkMode ? darkTheme : lightTheme }>
              <CssBaseline />
              <ScrollToTop />
              <Router />
            </ThemeProvider>
          </LoaderContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
