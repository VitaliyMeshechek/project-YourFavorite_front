// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import { FiSearch } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5'

import {
    Wrapper,
    SearchForm,
    SearchBtn,
    SearchInput,
  } from './NoticesSearch.styled';


export const NoticesSearch = () => {
  const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    // const dispatch = useDispatch();

    const handleChange = e => {
      const query = e.currentTarget.value
      const normalizedQuery = query.toLowerCase();
      setQuery(normalizedQuery)
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      setSearchParams({ query });
      setQuery('')
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

      {query && <SearchBtn type="reset">
        <IoClose />
      </SearchBtn>}

</SearchForm>

      </Wrapper>
    );
  };