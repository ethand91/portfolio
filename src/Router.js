import React, { lazy } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import { MainHome } from './pages/MainHome';
import { Navbar } from './components/Navbar';
import { Social } from './components/Social';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';

const Router = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Loader />
      <Navbar />
      { !isMobile && <Social /> }

      <Routes>
        <Route exact path="/" element={ <MainHome /> } />
      </Routes>
    </>
  );
};

export default Router;
