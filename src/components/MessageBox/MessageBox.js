import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { Check } from './../../assets/images/Check';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%'
  },
  submitButton: {
    width: '200px'
  }
}));

export const MessageBox = () => {
  const classes = useStyles();
  const [ sending, setSending ] = useState(false);
  const [ sendEmailSuccess, setSendEmailSuccess ] = useState(false);
  const { t } = useTranslation();

  const sendEmail = async (object) => {
    setSending(true);
    try {
      const _ = await emailjs.send('service_nva6v0x', 'template_47fdyh7', object, 'user_qT3we7KxrmdHKOFJe28hB');
      
      setSendEmailSuccess(true);
      setSending(false);
    } catch (error) {
      setSending(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().string("Name is required"),
      email: Yup.string().email("Email address is not valid").required("Email address is required"),
      message: Yup.string().required("message is required")
    }),
    onSubmit: (values) => {
      sendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false
  });

  return (
    <Container maxWidth="md">
      <AnimatePresence>
        {
          !sendEmailSuccess && (
            <form className={ classes.form } onSubmit={ formik.handleSubmit }>
              <TextField
                error={ Boolean(formik.touched.name && formik.errors.name) }
                onBlur={ formik.handleBlur }
                onChange={ formik.handleChange }
                value={ formik.values.name }
                helperText={ formik.touched.name && formik.errors.name }
                variant="filled"
                margin="normal"
                type="text"
                fullWidth
                id="name"
                label={ t('contact_full_name') }
                name="name"
              />

              <TextField
                error={ Boolean(formik.touched.email && formik.errors.email) }
                onBlur={ formik.handleBlur }
                onChange={ formik.handleChange }
                value={ formik.touched.email && formik.errors.email }
                variant="filled"
                type="email"
                margin="normal"
                fullWidth
                id="email"
                label={ t('contact_email') }
                name="email"
              />

              <TextField
                error={ Boolean(formik.touched.message && formik.errors.message) }
                onBlur={ formik.handleBlur }
                onChange={ formik.handleChange }
                value={ formik.values.message }
                helperText={ formik.touched.message && formik.errors.message }
                variant="filled"
                margin="normal"
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                multiline
                minRows={ 5 }
              />

              <Box display="flex" justify-content="center" mt={ 2 }>
                <Button
                  className={ classes.submitButton }
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={ sending }
                >
                  { t('contact_button') }
                </Button>
              </Box>
            </form>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {
          sendEmailSuccess && (
            <Box
              component={ motion.div }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box m={ 2 }>
                <Check width="150" />
              </Box>
              <Typography
                component={ motion.h4 }
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                variant="body2"
              >
                Your message has been sent successfully.
              </Typography>
            </Box>
          )
        }
      </AnimatePresence>
    </Container>
  );
};
