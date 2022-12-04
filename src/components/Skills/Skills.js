import React from 'react';
import {
  Typography,
  Box,
  useTheme,
  Paper,
  makeStyles
} from '@material-ui/core';

import { ProgressBar } from './ProgressBar';
import { skillsList } from './../../data';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "600px",
    display: "flex",
    flexWrap: "wrap"
  },
  skillWrapper: {
    width: "100%"
  },
  skillTitle: {
    whiteSpace: "nowrap",
    marginRight: theme.spacing(1)
  },
  paper: {
    marginRight: "10px",
    marginBottom: "10px",
    minWidth: "50px",
    padding: "10px"
  }
}));

export const Skills = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={ classes.container }>
      {
        skillsList.map((elem, k) => {
          <Paper elevation={ 10 } key={ k } className={ classes.paper }>
            <Typography align="center">{ elem.title }</Typography>
          </Paper>
        })
      }
    </div>
  );
};
