import React from 'react';
import { Container } from '@mui/material';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

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
  return (
    <ThemeProvider theme={ theme }>>
      <Container className={ theme.container } { ...props.rest }>
        { props.children }
      </Container>
    </ThemeProvider>
  );
};
