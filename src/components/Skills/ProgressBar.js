import React from 'react';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgb(60, 60, 60)"
  },
  progress: {
    height: "1px",
    backgroundColor: theme.palette.primary.main
  }
}));

export const ProgressBar = props => {
  const classes = useStyles({ value: props.value });

  return (
    <div className={ classes.container }>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${props.value}%` }}
        className={ classes.progress }
      >
      </motion.div>
    </div>
  );
};
