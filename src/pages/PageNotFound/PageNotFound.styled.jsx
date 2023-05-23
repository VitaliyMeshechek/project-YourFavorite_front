import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { IoPawOutline } from 'react-icons/io5';
import mobile_bg_1x from '../../images/backgrounds/404page_mobile@1x.png';
import mobile_bg_2x from '../../images/backgrounds/404page_mobile@2x.png';
import tablet_bg_1x from '../../images/backgrounds/404page_tablet@1x.png';
import tablet_bg_2x from '../../images/backgrounds/404page_tablet@2x.png';
import desktop_bg_1x from '../../images/backgrounds/404page_desktop@1x.png';
import desktop_bg_2x from '../../images/backgrounds/404page_desktop@2x.png';

export const NotFoundSection = styled.section`
  padding-top: 128px;
  padding-bottom: 212px;
  @media screen and (min-width: 768px) {
    padding-bottom: 275px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 100px;
  }
`;

export const NotFoundTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.37;
  color: #000000;
  margin: 0;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 100vw;
  background-image: url(${mobile_bg_1x});
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${mobile_bg_2x});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${tablet_bg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${tablet_bg_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktop_bg_1x});
    background-size: 822px 360px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${desktop_bg_2x});
    }
  }
`;

export const NotFoundButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #54adff;
  padding: 9px 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: #ffffff;
  border: none;
  border-radius: 40px;
  width: 248px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -100px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin-top: -400px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: -580px;
  }
`;

export const Icon = styled(IoPawOutline)`
  width: 24px;
  height: 24px;
  transform: rotate(30deg);
  margin-left: 10px;
`;
