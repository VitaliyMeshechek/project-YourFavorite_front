import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 608px;
    border-radius: 20px;
  }
`;

export const SearchBtn = styled.button`
margin-left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
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
    width: 17px;
    height: 17px;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  border: none;
  outline: none;
  letter-spacing: 0.04em;
  padding-left: 4px;
  padding-right: 4px;
  color: #888888;
  background-color: #fff;
  ::placeholder {
    font: inherit;
    font-weight: 400;
    border: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    border-radius: 20px;
  }
`;