import React, { useEffect } from 'react';
import {
  makeStyles,
  Container,
  Typography,
  Section
} from '@mui/material';
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
  }, [[ titleControls, titleInView ]);

  return (
    <Container
      component={ Section }
      className={ classes.container }
      { ...rest }
    >
      {
        title && (
          <motion.div
            ref={ titleRef }
            animate={ titleControls }
            initial="hidden"
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opactiy; 0, x: reverse ? 0 : 0 }
            }}
            className={ classes.titleContainer }
          >
            <Divider width="20%" />
            <Typography variant="h4" color="initial" className={ classes.title }>
              { props.title }
            </Typography>
          </motion.div>
        )
      }
      <motion.div
        ref={ contentRef }
        animate={ contentControls }
        initial="hidden"
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
          when: "beforeChildren"
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 }
        }}
      >
        { props.children }
      </motion.div>
    </Container>
  );
};
