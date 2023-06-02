import styled from '@emotion/styled';
import mobileBG1x from '../../images/backgrounds/mainPage_bg_mobile@1x.png';
import mobileBG2x from '../../images/backgrounds/mainPage_bg_mobile@2x.png';
import tabletBG1x from '../../images/backgrounds/mainPage_bg_tablet@1x.png';
import tabletBG2x from '../../images/backgrounds/mainPage_bg_tablet@2x.png';
import desktopBG1x from '../../images/backgrounds/mainPage_bg_desktop@1x.png';
import desktopBG2x from '../../images/backgrounds/mainPage_bg_desktop@2x.png';
import Paw from '../../images/paw.png';
import { keyframes } from '@emotion/react';

export const Img = styled.section`
  padding-top: 100px;
  height: 601px;
  background-image: url(${mobileBG1x});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobileBG2x});
  }

  @media screen and (min-width: 768px) {
    padding-top: 200px;
    background-image: url(${tabletBG1x});
    background-size: cover;
    height: 1193px;
    background-size: 818px 980px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tabletBG2x});
    }
  }
  @media screen and (min-width: 1280px) {
    padding-top: 260px;
    background-image: url(${desktopBG1x});
    background-size: 950px 730px;
    height: 800px;
    background-position: bottom right;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktopBG2x});
    }
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
    margin: 0;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    font-size: 64px;
    line-height: 1.47;
    color: #000000;
    max-width: 588px;
    margin-right: 148px;
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
    min-width: 500px;
    margin-left: -600px;
  }
`;

const pawAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  10%{
    transform: translateX(-50px);
  }
  25% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(-400px);
  }
  75% {
    transform: translateX(-800px);
  }
  100% {
    transform: translateX(-1200px);
  }
`;

export const ImgFirstPaw = styled.div`
  position: absolute;
  border: 0;
  bottom: 150px;
  right: 20px;
  width: 200px;
  height: 200px;
  z-index: 999;
  background-image: url(${Paw});
  background-repeat: no-repeat;
  animation: ${pawAnimation} 3s;
  animation-iteration-count: infinite;
`;
export const ImgSecondPaw = styled.div`
  position: absolute;
  bottom: -40px;
  border: 0;
  right: -80px;
  width: 200px;
  height: 200px;
  z-index: 999;
  background-image: url(${Paw});
  background-repeat: no-repeat;
  animation: ${pawAnimation} 4s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
`;

export const ImgThirdPaw = styled.div`
  position: absolute;
  border: 0;
  bottom: -200px;
  right: 20px;
  width: 200px;
  height: 200px;
  z-index: 999;
  background-image: url(${Paw});
  background-repeat: no-repeat;
  animation: ${pawAnimation} 3s;
  animation-iteration-count: infinite;
`;
export const ImgForthPaw = styled.div`
  position: absolute;
  bottom: -350px;
  border: 0;
  right: -80px;
  width: 200px;
  height: 200px;
  z-index: 999;
  background-image: url(${Paw});
  background-repeat: no-repeat;
  animation: ${pawAnimation} 4s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
`;
