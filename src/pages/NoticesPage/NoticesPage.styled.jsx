import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
    margin-top: 40px;
    font-weight: 700;
  font-size: 24px;
  line-height: 1.38;
  color: #111111;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`

export const TabletWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const Wrapper = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media screen and (min-width: 768px) {
      align-items: baseline;
      margin-top: 40px;
    }
`

export const Btn = styled.button`
margin-left: 12px;
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
font-family: inherit;
font-weight: 700;
font-size: 16px;
line-height: 22px;
background: #CCE4FB;
color: #54ADFF;
border: none;
border-radius: 50px;
cursor: pointer;
transition: all 300ms ease;

&:hover {
    color: #FEF9F9;
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
    
}

svg {
    width: 24px;
    height: 24px;
    color: inherit;
    
  }

@media screen and (min-width: 768px) {
    width: 152px;
    border-radius: 40px;
    border: 2px solid #54ADFF;
    background: transparent;
    &:hover {
    border: none;
    
}
}

span {
    margin-right: 12px;

    @media screen and (max-width: 767px) {
    display: none;
}
}
`

export const NavLinkStyled = styled(NavLink)`
display: flex;
flex-direction: column-reverse;
align-items: center;
justify-content: center;
width: 80px;
height: 80px;
border-radius: 50px;
border: none;
background: #54ADFF;
box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
font-family: inherit;
text-decoration: none;
font-weight: 600;
font-size: 12px;
line-height: 1.33;
letter-spacing: 0.04em;
color: #FFFFFF;
transition: all 300ms ease;

  &.active, :hover:not(.active) {
    background: linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%);
  }

  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 5;
  }

  @media screen and (min-width: 768px) {
    margin-left: 12px;
    flex-direction: row;
    min-width: 129px;
    height: 40px;
    padding: 9px 16px;
    border-radius: 40px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.38;

span {
    margin-right: 8px;
}
  }

  svg {
    width: 24px;
    height: 24px;
    color: inherit;
  }

`;