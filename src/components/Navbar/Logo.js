import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-scroll';

import Ethan from './../../assets/images/Ethan';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer'
  }
}));

export const Logo = props => {
  const classes = useStyles();

  return (
    <Link
      spy
      smooth
      duration={ 500 }
      offset={ -70 }
      to="home"
      onSetActive={ () => props.setHomeIsActive(true) }
      onSetInactive={ () => props.setHomeIsActive(false) }
      className={ classes.root }
    >
      <Ethan { ...props.rest }/>
    </Link>
  );
};
