import React, { useContext, useState, useEffect } from 'react';
import {
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Hidden,
  ThemeProvider
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { motion, useAnimation } from 'framer-motion';

import { Logo } from './Logo';
import { Menu } from './Menu';
import { MobileMenu } from './MobileMenu';
import { HamburgerIcon } from './HamburgerIcon';
import loaderContext from './../../contexts/loaderContext';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "150px"
  },
  navbar: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: (props) => (props.isMobile ? theme.spacing(0, 2) : theme.spacing(0, 6))
  }
}));

export const Navbar = () => {
  const [ homeIsActive, setHomeIsActive ] = useState(true);
  const isMobile = useMediaQuery("(max-width: 700px)");
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();
  const theme = useTheme();
  const [ scroll, setScroll ] = useState(false);
  const [ mobileNavIsOpen, setMobileNavIsOpen ] = useState(false);
  const handleNav = () => setScroll(window.scrollY > 30);
  window.addEventListener("scroll", handleNav);

  const appbarVariants = {
    initial: { height: isMobile ? 70 : 100, boxShadow: theme.shadows[0] },
    scrolled: { height: theme.navbarHeight, boxShadow: theme.shadows[10] }
  };

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        transition: {
          delay: 0.05,
          type: "spring",
          stiffness: 260,
          dampling: 20
        }
      });
    } else {
      controls.start({ y: -100 });
    }
  }, [ isLoading, controls ]);

  return (
    <ThemeProvider theme={ theme }>
      <motion.div animate={ controls }>
        <AppBar position="fixed" elevation={ 0 } className={ theme.navbar } component="nav">
          <Toolbar
            className={ theme.toolbar }
            component={ motion.div }
            variants={ appbarVariants }
            animate={ scroll ? "scrolled" : "initial" }
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <Logo className={ theme.logo } setHomeIsActive={ setHomeIsActive } />

            <Hidden smDown>
              <Menu homeIsActive={ homeIsActive } />
            </Hidden>

            <Hidden mdUp>
              <HamburgerIcon isOpen={ mobileNavIsOpen } onClick={ () => setMobileNavIsOpen(!mobileNavIsOpen) }/>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <MobileMenu
            open={ mobileNavIsOpen }
            onClose={ () => setMobileNavIsOpen(false) }
            onOpen={ () => setMobileNavIsOpen(true) }
          />
        </Hidden>
      </motion.div>

    </ThemeProvider>
  );
};
