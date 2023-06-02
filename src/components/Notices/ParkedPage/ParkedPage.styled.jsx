import styled from '@emotion/styled'

export const NotFoundSection = styled.section`
display: flex;
justify-content: start;
align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;
  /* @media screen and (min-width: 768px) {
    padding-bottom: 275px;
  }*/
  @media screen and (min-width: 768px) {
    justify-content: center;
  } 
`;

export const Title = styled.h2`
display: block;
/* width: 500px; */
min-width: 280px;
  font-family: 'Manrope';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.37;

background: rgba(254,249,249, 0.8);;

    border-radius: 16px;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    width: 550px;
  }
`;

export const Image = styled.img`
width: 320px;
position: fixed;
right: 0;
bottom: 0;
z-index: -1;
`;
