import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import {
  LinkedIn,
  Instagram,
  GitHub,
  Email
} from '@material-ui/icons';

import { IconButton } from './../IconButton';
import { DarkModeSwitcher } from './../DarkModeSwitcher';
import loaderContext from './../../contexts/loaderContext';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    zIndex: 100
  },
  mobileWrapper: {
    display: 'flex'
  }
}));

export const Social = props => {
  const styles = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start(i => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.8 + (i * 0.1)
        }
      }));
    } else {
      controls.start({ opacity: 0, y: 0 });
    }
  }, [isLoading, controls]);

  if (props.isMobile) {
    return (
      <div className={ styles.mobileWrapper }>
        <IconButton icon={ GitHub } m={ 1 } href="https://github.com/ethand91" />
        <IconButton icon={ Instagram } m={ 1 } href="https://instagram.com/edenvir99" />
        <IconButton icon={ LinkedIn } m={ 1 } href="https://www.linkedin.com/in/ethan-denvir-ba1a75240/" />
        <IconButton icon={ Email } m={ 1 } href="mailto:edenvir99@gmail.com" />
      </div>
    );
  } else {
    return (
      <motion.div className={ styles.wrapper }>
        <motion.div animate={ controls } custom={ 0 }>
          <IconButton icon={ GitHub } m={ 1 } href="https://github.com/ethand91" />
        </motion.div>
        <motion.div animate={ controls } custom={ 1 }>
          <IconButton icon={ Instagram } m={ 1 } href="https://instagram.com/edenvir99" />
        </motion.div>
        <motion.div animate={ controls } custom={ 2 }>
          <IconButton icon={ LinkedIn } m={ 1 } href="https://www.linkedin.com/in/ethan-denvir-ba1a75240/" />
        </motion.div>
        <motion.div animate={ controls } custom={ 3 }>
          <IconButton icon={ Email } m={ 1 } href="mailto:edenvir99@gmail.com" />
        </motion.div>
        <motion.div animate={ controls } custom={ 4 }>
          <DarkModeSwitcher />
        </motion.div>
      </motion.div>
    );
  }
};

Social.propTypes = {
  isMobile: PropTypes.bool
}
