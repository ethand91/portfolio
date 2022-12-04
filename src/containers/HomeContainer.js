import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: `calc(${theme.spacing(4)}px + ${theme.navbarHeight})`,
    paddingBottom: theme.spacing(4),
    [ theme.breakpoints.down("sm") ] : {
      paddingTop: theme.navbarHeight
    }
  }
}));

export const HomeContainer = props => {
  const styles = useStyles();

  return (
    <Container className={ styles.container } { ...props.rest }>
      { props.children }
    </Container>
  );
};
