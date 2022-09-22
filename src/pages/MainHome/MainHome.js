import React from 'react';
import { motion } from 'framer-motion';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

import { Home } from './../../sections/Home';
import { About } from './../../sections/About';
import { Experience } from './../../sections/Experience';
import { Contact } from './../../sections/Contact';
import { Background3d } from './../../components/Background3d/Background3d';

export const MainHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <Home />
      <About />
      <Experience />
      <Contact />
      { !isMobile && <Background3d /> }
    </motion.main>
  );
};
