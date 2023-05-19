// import { useDispatch } from 'react-redux';
// import { register } from '../../../redux/auth/operations';
// import { Formik } from 'formik';
// import {
//   RegisterFormWrap,
//   RegisterText,
//   RegisterInput,
//   Error,
//   RegisterButton,
// } from './RegisterForm.styled';

export const RegisterForm = () => {
//   const initialValues = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   const dispatch = useDispatch();

//   const handleSubmit = (values, props) => {
//     dispatch(
//       register({
//         name: values.name,
//         email: values.email,
//         password: values.password,
//       })
//     );
//     props.resetForm();
//   };

    return (
           console.log("reg")
    // <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    //   <RegisterFormWrap autoComplete="off">
    //     <RegisterText>
    //       UserName
    //       <RegisterInput type="text" name="name" />
    //       <Error name="name" component="div" />
    //     </RegisterText>
    //     <RegisterText>
    //       Email
    //       <RegisterInput type="email" name="email" />
    //       <Error name="email" component="div" />
    //     </RegisterText>
    //     <RegisterText>
    //       Password
    //       <RegisterInput type="password" name="password" />
    //       <Error name="password" component="div" />
    //     </RegisterText>
    //     <RegisterButton type="submit">Register</RegisterButton>
    //   </RegisterFormWrap>
    // </Formik>
  );
};
