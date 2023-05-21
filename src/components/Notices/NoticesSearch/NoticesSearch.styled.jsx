import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  cursor: pointer;
  background-color: #fff;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  :hover {
    opacity: 1;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #fff;
  ::placeholder {
    font: inherit;
    background-color: #fff;
    font-size: 18px;
    border: none;
    outline: none;
  }
`;