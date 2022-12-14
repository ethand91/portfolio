import React, { useState, useEffect, useContext } from 'react';
import {
  Tab,
  Tabs,
  Button,
  Link as MuiLink,
  makeStyles,
  withStyles
} from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { Link, Events } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { LanguageSelector } from './LanguageSelector';
import LoaderContext from './../../contexts/loaderContext';

const smoothScrollProps = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 500
};

const AnimatedLink = React.forwardRef((props, ref) => {
  <motion.div ref={ ref } custom={ props.custom } animate={ props.animate }>
    <Link { ...smoothScrollProps } { ...props } />
  </motion.div>
});

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  tabs: {
    marginRight: theme.spacing(4)
  },
  navMenuItem: {
    marginRight: theme.spacing(1)
  }
}));

const StyledTab = withStyles((theme) => ({
  root: {
    transition: '.2s',
    minWidth: 120,
    '&:hover': {
      color: theme.palette.text.primary
    }
  }
}))((props) => <Tab disableRipple { ...props } />);

const StyledTabs = withStyles({
  indicator: {
    '& > span': {
      maxWidth: 20
    }
  }
})((props) => <Tabs { ...props } variant="fullWidth" TabIndicatorProps={{ children: <span /> }} />);

export const Menu = props => {
  const classes = useStyles();
  const [ value, setValue ] = useState(false);
  const [ isScrolling, setIsScrolling ] = useState(false);
  const { isLoading } = useContext(LoaderContext);
  const controls = useAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      setIsScrolling(true);
    });

    Events.scrollEvent.register('end', (to, element) => {
      setIsScrolling(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1 + 0.3 }
      }));
    } else {
      controls.start({ opacity: 0, y: -5 });
    }
  }, [ isLoading, controls ]);

  const handleChange = (event, newValue) =>
    setValue(newValue);

  const spyHandleChange = index => {
    if (!isScrolling) {
      setValue(index);
    }
  };

  useEffect(() => {
    if (props.homeIsActive) {
      setValue(false);
    }
  }, [ props.homeIsActive ]);

  return (
    <div className={ classes.wrapper }>
      <StyledTabs
        className={ classes.tabs }
        value={ value }
        indicatorColor="primary"
        textColor="primary"
        onChange={ handleChange }
        aria-label="disabled tabs"
      >
        <StyledTab
          component={ AnimatedLink }
          custom={ 0 }
          animate={ controls }
          to="about"
          label={ t('menu_about') }
          onSetActive={ () => spyHandleChange(0) }
          onSetinactive={ () => spyHandleChange(false) }
        />

        <StyledTab
          component={ AnimatedLink }
          custom={ 1 }
          animate={ controls }
          to="experience"
          label={ t('menu_experience') }
          onSetActive={ () => spyHandleChange(1) }
        />

        <StyledTab
          component={ AnimatedLink }
          animate={ controls }
          custom={ 2 }
          to="contact"
          label={ t('menu_contact') }
          onSetActive={ () => spyHandleChange(2) }
        />
      </StyledTabs>

      <motion.div custom={ 3 } animate={ controls }>
        <LanguageSelector style={{ marginLeft: '32px' }} />
      </motion.div>
    </div>
  );
};
