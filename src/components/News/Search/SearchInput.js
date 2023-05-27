import {
  Input,
  Icon,
  CancelIcon,
  InputWrapper,
  IconWrapper,
  FindButton,
  inputNotification,
  CancelButton,
  SearchForm,
} from 'components/News/Search/SearchInput.styled';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const SearchInput = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const validationSchema = yup.object().shape({
    search: yup.string().min(3).max(25),
  });

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm, dirty, isSubmitting, errors, touched }) => (
        <SearchForm autoComplete="off">
          <InputWrapper>
            <Input type="search" name="search" placeholder="Search" />
            {errors.search && touched.search && (
              <ErrorMessage name="search" component={inputNotification} />
            )}

            <IconWrapper>
              <FindButton type="submit">
                <Icon />
              </FindButton>

              <CancelButton
                type="button"
                dirty={dirty}
                errors={errors}
                touched={touched}
                isSubmitting={isSubmitting}
                onClick={resetForm}
              >
                <CancelIcon />
              </CancelButton>
            </IconWrapper>
          </InputWrapper>
        </SearchForm>
      )}
    </Formik>
  );
};

export default SearchInput;
