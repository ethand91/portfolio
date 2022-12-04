import React from 'react';
import { makeStyles } from '@material-ui/core';

import AvatarImg from './../../assets/images/Avatar.jpg';

const useStyles = makeStyles((theme) => ({
  avatarimg: {
    borderRadius: "50%",
    width: "270px",
    height: "270px",
    objectFit: "cover",
    objectPosition: "0 -20px",
    boxShadow: theme.shadows[10]
  }
}));

export const Avatar = () => {
  const classes = useStyles();

  return (
    <img src={ AvatarImg } alt="Ethan Denvir" className={ classes.avatarImg } />
  );
};
