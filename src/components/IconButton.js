import React from 'react';
import {
  Box,
  Link,
  Icon,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    transition: "0.1s",
    cursor: "pointer",
    fontSize: props => props.fontSize ? `${props.fontSize}px` : "32px",
    "&:hover": {
      color: theme.palette.text.primary
    }
  }
}));

export const IconButton = props => {
  const classes = useStyles({ fontSize: props.fontSize });

  return (
    <Box
      diaply="inline"
      { ...props.rest }
      component={ motion.div }
      whileHover={{ scale: 1.1 }}
    >
      <Link href={ props.href }>
        <Icon className={ classes.icon }/>
      </Link>
    </Box>
  );
};
