import { useSelector, useDispatch } from 'react-redux';
import {useSearchParams} from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5'
import { selectFilter } from 'redux/notices/selectors';
import { setFilter } from 'redux/notices/filterSlice';
import {
    Wrapper,
    SearchForm,
    SearchBtn,
    SearchInput,
  } from './NoticesSearch.styled';


export const NoticesSearch = () => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(setFilter(e.currentTarget.value));
      console.log(());
      e.currentTarget.value=''
    };
  
    return (
      <Wrapper>
        <SearchForm  onSubmit={handleSubmit}>
        <SearchInput
          label="search"
          type="search"
          name="search"
          autocomplete="off"
          autoFocus
          placeholder="Search"        
      />
      <SearchBtn type="submit">
        <FiSearch />
      </SearchBtn>

      <SearchBtn type="reset">
        <IoClose />
      </SearchBtn>

</SearchForm>

      </Wrapper>
    );
  };