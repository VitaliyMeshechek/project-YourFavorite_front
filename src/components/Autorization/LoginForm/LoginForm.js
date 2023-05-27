import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  FormTitle,
  Forms,
  Label,
  Input,
  IconButton,
  Button,
  Subtitle,
  Error,
  PasswordMessage,
  ErrorEmailIcon,
  SecuredPasswordIcon,
} from './LoginForm.styled';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState('password');
  const [toggleIconPass, setToggleIconPass] = useState(
    <BsEyeSlash style={{ fill: '#54adff', width: '24px', height: '24px' }} />
  );

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .nullable()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be no more than 16 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Must have at least one lowercase and uppercase letter, and one number'
      ),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const UserLogin = await dispatch(logIn(values));
    try {
      const status = UserLogin.payload.response;
      if (status === 'Success') {
        navigate('/user');
        resetForm();
      } else {
        console.log('unauthorized');
      }
    } catch (error) {
      console.log(error);
    }
  };

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Forms autoComplete="off">
          <FormTitle>Login </FormTitle>
          <Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              valid={!errors.email && touched.email}
              error={touched.email && errors.email}
            />

            {touched.email && errors.email && (
              <>
                <IconButton>
                  <ErrorEmailIcon />
                </IconButton>
                <Error name="email" component="div" />
              </>
            )}
            {touched.email && !errors.email && (
              <>
                <IconButton />
              </>
            )}
          </Label>

          <Label>
            <Input
              type={type}
              name="password"
              placeholder="Password"
              valid={!errors.password && touched.password}
              error={touched.password && errors.password}
            />

            {touched.password && !errors.password ? (
              <>
                <PasswordMessage>Password is secure</PasswordMessage>
                <IconButton>
                  <SecuredPasswordIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Error name="password" component="div" />
                <IconButton type="button" onClick={togglePassInput}>
                  {toggleIconPass}
                </IconButton>
              </>
            )}
          </Label>

          <Button type="submit">Login</Button>

          <Subtitle>
            Don't have an account?
            <NavLink
              to="/register"
              style={{ color: '#54ADFF', marginLeft: '4px' }}
            >
              Register
            </NavLink>
          </Subtitle>
        </Forms>
      )}
    </Formik>
  );
};

export default LoginForm;
