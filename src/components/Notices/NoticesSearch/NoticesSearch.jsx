import { useDispatch } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5'

import {
    Wrapper,
    SearchForm,
    SearchBtn,
    SearchInput,
  } from './NoticesSearch.styled';
import { setQuery } from 'redux/noticesPage/querySlice';
import { useState } from 'react';


export const NoticesSearch = () => {
  const [search, setSearch] = useState('')
const dispatch = useDispatch()

const handleChange = e => {
  setSearch(e.currentTarget.value)
}

const handleSubmit = e => {
  e.preventDefault()
  const query = e.target.search.value
  const normalizedQuery = query.toLowerCase();  
  dispatch(setQuery(normalizedQuery));
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
          onChange={handleChange}
      />
      <SearchBtn type="submit">
        <FiSearch />
      </SearchBtn>

      {search.length > 0 && <SearchBtn type="reset">
        <IoClose />
      </SearchBtn>}

</SearchForm>

      </Wrapper>
    );
  };