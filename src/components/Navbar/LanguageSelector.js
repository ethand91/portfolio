import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  MenuItem,
  Button,
  makeStyles
} from '@material-ui/core';
import { KeyboardArrowDownSharp } from '@material-ui/icons';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icons.min.css';

const LANGUAGES = [
  {
    code: 'en',
    name: 'EN',
    country_code: 'gb'
  },
  {
    code: 'jp',
    name: 'JP',
    country_code: 'jp'
  }
];

const useStyles = makeStyles((theme) => ({
  profileMenu: {
    '&.MuiPaper-root': {
      backgroundColor: theme.palette.primary.main,
      marginTop: '2px',
      boxShadow: theme.shadows[4]
    }
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.backgroundSecondary
    }
  },
  flagIcon: {
    marginRight: theme.spacing(1)
  }
}));

export const LanguageSelector = props => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [ anchorEl, setAnchorEl ] = useState(null);

  const handleClose = code => {
    i18n.changeLanguage(code);
    setAnchorEl(null);

    props.onClose();
  };

  const currentLanguage = LANGUAGES.find((elem) => elem.code === t('language'));

  return (
    <div { ...props }>
      <Button variant="contained" color="primary" onClick={ (e) => setAnchorEl(e.currentTarget) }>
        {
          currentLanguage && (
            <>
              <span className={ `flag-icon flag-icon-${currentLanguage.country_code} ${classes.flagIcon}` }/>
              { currentLanguage.name }
            </>
          )
        }
        <KeyboardArrowDownSharp style={{ color: 'white' }} />
      </Button>

      <Menu
        id="profile-menu"
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ () => setAnchorEl(null) }
        keepMounted
        elevation={ 0 }
        getContentAnchorEl={ null }
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        className={ classes.profileMenu }
        disableScrollLock
      >
        <MenuItem className={ classes.menuItem } onClick={ () => handleClose('en') }>
          <span className={ `flag-icon flag-icon-gb ${classes.flagIcon}` }/>
          EN
        </MenuItem>
        <MenuItem className={ classes.menuItem } onClick={ () => handleClose('jp') }>
          <span className={ `flag-icon flag-icon-jp ${classes.flagIcon}` }/>
          日本語
        </MenuItem>
      </Menu>
    </div>
  );
};

LanguageSelector.propTypes = {
  onClose: PropTypes.func
};
