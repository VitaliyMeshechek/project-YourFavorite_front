import styled from '@emotion/styled';

export const WrapperContainer = styled.div`
  @media screen and (max-width: 767.98px) {
    display: block;
  }
  @media screen and (max-width: 1279.98px) {
    display: block;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    /* padding-top: 199px; */
    display: flex;
    position: relative;
  }
`;

export const FirstTitle = styled.h1`
  @media screen and (max-width: 767.98px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.38;
    color: #000000;
    max-width: 280px;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 20px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 1.47;
    color: #000000;
    max-width: 588px;
    margin-right: 148px;
    margin-top: 80px;
    margin-bottom: 27px;
    /* text-align: center; */
  }
  @media screen and (min-width: 1280px) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 68px;
    line-height: 1.3;
    color: #111111;
    margin: 0;
    padding: 0;
    width: 501px;
    margin-top: 180px;
  }
`;

// export const FirstImg = styled.img`
//   width: 426px;
//   height: auto;
//   display: block;
//   position: absolute;
//   bottom: 0;
//   left: 640px;
// `;

// export const SecondImg = styled.img`
//   width: 532px;
//   height: auto;
//   display: block;
//   position: absolute;
//   top: 300px;
//   right: -18px;
// `;

// export const ThirdImg = styled.img`
//   width: 362px;
//   height: auto;
//   display: block;
//   position: absolute;
//   bottom: 0;
//   right: -80px;
// `;

// export const WrapperContainerImg = styled.div`
//   margin-left: 100px;
//   position: relative;
// `;

export const MainImg = styled.img`
  @media screen and (max-width: 767.98px) {
    max-width: 474px;
    width: 100%;
    height: auto;
    display: block;
  }
  @media screen and (max-width: 1279.98px) {
    max-width: 985px;
    width: 100%;
    margin-bottom: 14px;
    height: auto;
    display: block;
  }

  @media screen and (min-width: 1280px) {
    width: 900px;
    height: auto;
    display: block;
    padding: 0;
    margin: 0;
  }
`;
