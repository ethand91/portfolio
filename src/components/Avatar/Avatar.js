import React from 'react';
import { makeStyles } from '@mui/styles';

import AvatarImg from './../../assets/images/avatar.jpg';

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
