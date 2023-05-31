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
  const search = e.currentTarget.value
  setSearch(search)
  if(!search) {
    dispatch(setQuery(''));
  }
}

const handleSubmit = e => {
  e.preventDefault()
  const query = e.target.search.value.toLowerCase()
  dispatch(setQuery(query));
};

const handleDelete = () => {
dispatch(setQuery(''))
setSearch('')
}

  
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
          value={search}
      />
      <SearchBtn type="submit">
        <FiSearch />
      </SearchBtn>

      {search.length > 0 && <SearchBtn type="button" onClick={(() => handleDelete())}>
        <IoClose />
      </SearchBtn>}

</SearchForm>

      </Wrapper>
    );
  };