import React from 'react';
import {
  Drawer,
  List,
  Button,
  Divider,
  ListItem,
  Link as MuiLink,
  makeStyles
} from '@material-ui/core';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { DarkModeSwitcher } from './../DarkModeSwitcher';
import { LanguageSelector } from './LanguageSelector';

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.background.default
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto",
    marginTop: theme.spacing(4)
  },
  listItem: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2, 0),
    "&:hover": {
      backgroundColor: "rgb(80, 80, 80)"
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1)
  },
  active: {
    backgroundColor: theme.palette.primary.main
  }
}));

export const MobileMenu = props => {
  const classes = useStyles();
  const { t } = useTranslation();

  const listItemProps = {
    button: true,
    component: Link,
    onClick: props.onClose,
    onKeyDown: props.onClose,
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
    className: classes.listItem,
    activeClass: classes.active
  };

  return (
    <Drawer anchor="left" open={ props.open } onClose={ props.onClose } classes={{ paper: classes.drawer }}>
      <div className={ classes.list } role="presentation">
        <ListItem { ...listItemProps } to="about">
          { t('menu_about') }
        </ListItem>

        <ListItem { ...listItemProps } to="experience">
          { t('menu_experience') }
        </ListItem>

        <ListItem { ...listItemProps } to="contact">
          { t('menu_contact') }
        </ListItem>

        <ListItem className={ classes.buttonContainer }>
          <LanguageSelector onClose={ props.onClose } />
        </ListItem>

        <ListItem className={ classes.buttonContainer }>
          <DarkModeSwitcher onClose={ props.onClose } />
        </ListItem>
      </div>
    </Drawer>
  );
};
