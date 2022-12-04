import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    cursor: 'pointer',
    padding: '2px'
  },
  line: {
    width: '3px',
    backgroundColor: theme.palette.text.secondary
  },
  line1: {
    width: '35px',
    marginBottom: '7px'
  },
  line2: {
    width: '25px',
    marginBottom: '7px'
  },
  line3: {
    width: '35px'
  }
}));

export const HamburgerIcon = props => {
  const controls = useAnimation();
  const classes = useStyles();

  useEffect(() => {
    if (props.isOpen) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [props.isOpen, controls]);

  return (
    <motion.div className={ classes.container } { ...props.rest }>
      <motion.div className={ `${classes.line} ${classes.line1}` } variants={{ initial: { rotate: 0, y: 0 }, animate: { rotate: 45, y: 9 }}} animate={ controls }></motion.div>
      <motion.div className={ `${classes.line} ${classes.line2}` } variants={{ initial: { x: 0, opacity: 1 }, animate: { x: 250, opacity: 0 }}} animate={ controls }></motion.div>
      <motion.div className={ `${classes.line} ${classes.line3}` } variants={{ initial: { rotate: 0, y: 0 }, animate: { rotate: -45, y: -9 }}} animate={ controls }></motion.div>
    </motion.div>
  );
};
