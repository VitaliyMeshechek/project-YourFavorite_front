import styled from '@emotion/styled';

export const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  padding-top: 20px;
  padding-bottom: 5px;
  align-items: center;
  width: 100vw;
  height: 54px;
  z-index: 999;

  background-color: #fef9f9;
  border: 0;
  /* box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19); */
  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const SiteNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    margin-left: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 22px;
  }
`;
export const UserNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

// @media screen and (min-width: px) {

//   }
