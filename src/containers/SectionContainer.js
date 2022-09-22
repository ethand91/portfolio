import React, { useEffect } from 'react';
import {
  Container,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Divider } from './../components/Divider';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: props => props.padding ? `${props.padding}px` : "80px",
    paddingBottom: props => props.padding ? `${props.padding}px` : "80px"
  },
  titleContainer: {
    paddingBottom: theme.spacing(8),
    display: "flex",
    alignItems: "center",
    maxWidth: "100%"
  },
  title: {
    margin: theme.spacing(0, 4),
    textTransform: "uppercase",
    whiteSpace: "nowrap"
  },
  childrenContainer: {
    minHeight: "100%"
  }
}));

export const SectionContainer = props => {
  const classes = useStyles({
    full: props.full,
    maxWidth: props.maxWidth,
    padding: props.padding
  });

  const titleControls = useAnimation();
  const contentControls = useAnimation();
  const [ titleRef, titleInView ] = useInView();
  const [ contentRef, contentInView ] = useInView();

  useEffect(() => {
    if (titleInView) {
      titleControls.start("visible");
    }
  }, [ titleControls, titleInView ]);

  useEffect(() => {
    if (contentInView) {
      contentControls.start("visible");
    }
  }, [ contentControls, contentInView ]);

  return (
    <Container component='section' className={ classes.container } { ...props.rest }>
    </Container>
  );
};
