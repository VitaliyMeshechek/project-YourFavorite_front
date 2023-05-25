// import { useDispatch } from 'react-redux';
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
    const [searchParams, setSearchParams] = useSearchParams();
    // const dispatch = useDispatch();
  
    const handleSubmit = query => {
      setSearchParams({ query: query });
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

      {searchParams && <SearchBtn type="reset">
        <IoClose />
      </SearchBtn>}

</SearchForm>

      </Wrapper>
    );
  };