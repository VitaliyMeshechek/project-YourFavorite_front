import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5'
import { selectFilter } from 'redux/notices/selectors';
import { setFilter } from 'redux/notices/slice';
import {
    Wrapper,
    SearchForm,
    SearchBtn,
    SearchInput,
  } from './NoticesSearch.styled';


export const NoticesSearch = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
  
    const handleFilterChange = e => {
      dispatch(setFilter(e.currentTarget.value));
    };
  
    return (
      <Wrapper>
        <SearchForm  >
        <SearchInput
          label="search"
          type="search"
          name="search"
          onChange={handleFilterChange}
          autocomplete="off"
          autoFocus
          placeholder="Search"
          value={filter}
        
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