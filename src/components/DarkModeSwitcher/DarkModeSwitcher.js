import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  FormControlLabel
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import ThemeContext from './../../contexts/themeContext';

export const DarkModeSwitcher = props => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <Switch
          checked={ isDarkMode }
          name="checkedDarkMode"
          color="primary"
          onChange={ () => {
            props.onClose();
            setIsDarkMode(!isDarkMode);
          }}
        />
      }
      label={ t('dark_mode') }
    />
  );
};

DarkModeSwitcher.propTypes = {
  onClose: PropTypes.func
}
