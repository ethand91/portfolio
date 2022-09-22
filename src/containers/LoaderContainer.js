import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

import loaderContext from './../contexts/loaderContext';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF4C29",
    zIndex: 10000
  },
  content: {
    margin: "0 auto"
  }
}));

export const LoaderContainer = props => {
  const { setIsLoading } = useContext(loaderContext);
  const classes = useStyles();

  return (
    <motion.div
      initial={{
        y: 0
      }}
      animate={{
        y: "-100vh"
      }}
      transition={{
        delay: 4.2,
        duration: 0.3
      }}
      onAnimationComplete={ definition => {
        setIsLoading(false)
      }}
      className={ classes.container }
    >
      <div className={ classes.content }>{ props.children }</div>
    </motion.div>
  );
};
