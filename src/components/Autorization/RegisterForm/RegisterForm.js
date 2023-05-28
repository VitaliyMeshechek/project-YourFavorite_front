import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Error,
  PasswordMessage,
  FormTitle,
  Forms,
  Input,
  Label,
  IconButton,
  Subtitle,
  Button,
} from './RegisterForm.styled';

import { BsEyeSlash, BsEye } from 'react-icons/bs';

export const RegisterForm = () => {
  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');
  const [toggleIconPass, setToggleIconPass] = useState(
    <BsEyeSlash style={{ fill: '#54adff', width: '24px', height: '24px' }} />
  );
  const [toggleIconConfirmPass, setToggleIconConfirmPass] = useState(
    <BsEyeSlash style={{ fill: '#54adff', width: '24px', height: '24px' }} />
  );

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const dispatch = useDispatch();

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIconPass(
        <BsEye style={{ fill: '#54adff', width: '24px', height: '24px' }} />
      );
    } else {
      setType('password');
      setToggleIconPass(
        <BsEyeSlash
          style={{ fill: '#54adff', width: '24px', height: '24px' }}
        />
      );
    }
  };

  const toggleConfirmPassInput = () => {
    if (typeConfirm === 'password') {
      setTypeConfirm('text');
      setToggleIconConfirmPass(
        <BsEye style={{ fill: '#54adff', width: '24px', height: '24px' }} />
      );
    } else {
      setTypeConfirm('password');
      setToggleIconConfirmPass(
        <BsEyeSlash
          style={{ fill: '#54adff', width: '24px', height: '24px' }}
        />
      );
    }
  };

  const registrationValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .nullable()
      .required('Password is required')
      .min(6, 'Password must have at least 6 characters')
      .max(16, 'Password must have no more than 16 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Must have at least one lowercase and uppercase letter and one number'
      ),
    confirmPassword: Yup.string()
      .nullable()
      .when('password', (password, schema) => {
        return password
          ? schema
              .required('Password confirmation required')
              .oneOf([Yup.ref('password')], 'Passwords must match')
          : schema.notRequired();
      }),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
    >
      {({ errors, touched, isSubmitting }) => (
        <Forms autoComplete="off">
          <FormTitle>Registration </FormTitle>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              valid={touched.email && !errors.email ? 'true' : undefined}
              error={touched.email && errors.email}
            />

            <Error name="email" component="div" />
          </Label>
          <Label>
            <Input
              type={type}
              name="password"
              placeholder="Password"
              as={Input}
              valid={touched.password && !errors.password ? 'true' : undefined}
              error={touched.password && errors.password}
            />

            <IconButton type="button" onClick={togglePassInput}>
              {toggleIconPass}
            </IconButton>
            {touched.password && !errors.password ? (
              <PasswordMessage>Password is secure</PasswordMessage>
            ) : (
              <Error name="password" component="div" />
            )}
          </Label>
          <Label>
            <Input
              type={typeConfirm}
              name="confirmPassword"
              placeholder="ConfirmPassword"
              as={Input}
              valid={
                touched.confirmPassword && !errors.confirmPassword
                  ? 'true'
                  : undefined
              }
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <IconButton type="button" onClick={toggleConfirmPassInput}>
              {toggleIconConfirmPass}
            </IconButton>
            {touched.confirmPassword && errors.confirmPassword ? (
              <Error name="confirmPassword" component="div" />
            ) : null}
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Registration
          </Button>
          <Subtitle>
            Already have an account?
            <NavLink
              to="/login"
              style={{ color: '#54ADFF', marginLeft: '4px' }}
            >
              Login
            </NavLink>
          </Subtitle>
        </Forms>
      )}
    </Formik>
  );
};
