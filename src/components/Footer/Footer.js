import React from 'react';
import {
  Container,
  Typography,
  Divider,
  useTheme,
  Box,
  useMediaQuery,
  makeStyles
} from '@material-ui/core';

import { Social } from './../Social';

const useStyles = makeStyles((theme => ({
  footer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6)
  }
})));

export const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Divider style={{ backgroundColor: theme.palette.main }} />

      <Box className={ classes.footer }>
        { isMobile && <Social mobile /> }
        <Typography variant="body1" color="initial">
          2022 Ethan Denvir
        </Typography>
      </Box>
    </Container>
  );
};
