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
import { useSearchParams } from 'react-router-dom';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/notices/slice';

const SearchInput = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const handleSubmit = ({ search }, { resetForm }) => {
    // const nextParams = search !== '' ? { search } : {};
    // setSearchParams(nextParams);
    dispatch(setFilter(search));

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
