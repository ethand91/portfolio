import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline",
    width: (props) => (props.fullWidth ? "100%" : props.width),
    height: "1px",
    backgroundColor: "red"
  }
}));

export const Divider = props => {
  const classes = useStyles({
    fullWidth: props.fullWidth,
    width: props.width
  });

  return (
    <div className={ classes.root } { ...props.rest }>
    </div>
  );
};
