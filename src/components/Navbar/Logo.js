import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-scroll';

import Ethan from './../../assets/images/avatar.jpg';

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
      onSetInavtive={ () => props.setHomeIsActive(false) }
      className={ classes.root }
    >
      <Ethan { ...props.rest }/>
    </Link>
  );
};
