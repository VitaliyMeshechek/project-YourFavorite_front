import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterInput, Error } from './RegisterForm.styled';
import {
  FormTitle,
  Forms,
  Input,
  Label,
  IconButton,
  Subtitle,
  Button,
} from '../LoginForm/LoginForm.styled';
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

  const togglePassInput = e => {
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

  const toggleConfirmPassInput = e => {
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
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at least 16 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Must be at least one lowercase and uppercase letter, one number'
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

  const handleSubmit = (values, props) => {
    dispatch(
      register({
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
    );
    props.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
    >
      <Forms autoComplete="on">
        <FormTitle>Registration </FormTitle>
        <Label>
          <Input type="email" name="email" placeholder="Email" />
          <Error name="email" component="div" />
        </Label>
        <Label>
          <Input
            type={type}
            name="password"
            placeholder="Password"
            as={Input}
          />

          <IconButton type="button" onClick={togglePassInput}>
            {toggleIconPass}
          </IconButton>
          <Error name="password" component="div" />
        </Label>
        <Label>
          <RegisterInput
            type={typeConfirm}
            name="confirmPassword"
            placeholder="ConfirmPassword"
          />
          <IconButton type="button" onClick={toggleConfirmPassInput}>
            {toggleIconConfirmPass}
          </IconButton>
          <Error name="confirmPassword" component="div" />
        </Label>

        <Button type="submit">Registration</Button>
        <Subtitle>
          Already have an account?
          <NavLink to="/login" style={{ color: '#54ADFF', marginLeft: '4px' }}>
            Login
          </NavLink>
        </Subtitle>
      </Forms>
    </Formik>
  );
};
