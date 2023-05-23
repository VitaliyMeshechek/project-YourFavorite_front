import styled from '@emotion/styled';

export const List = styled.ul`
  @media screen and (max-width: 767.98px) {
    display: block;
    gap: 0;
  }
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  list-style: none;
  @media screen and (min-width: 1280px) {
    width: 1280px;
    flex-basis: calc((100% - 4 * 32px) / 3);
  }
`;
