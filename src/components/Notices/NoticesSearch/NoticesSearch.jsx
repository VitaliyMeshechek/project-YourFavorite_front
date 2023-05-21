import { useSelector, useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
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
        <SearchForm>
        <SearchInput
        label="Find contacts by name"
        type="search"
        name="search"
          
          autocomplete="off"
          autoFocus
          placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
      <SearchBtn>
          <FiSearch />
        </SearchBtn>

        </SearchForm>

      </Wrapper>
    );
  };