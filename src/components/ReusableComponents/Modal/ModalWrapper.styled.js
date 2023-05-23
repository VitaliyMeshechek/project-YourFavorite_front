import styled from '@emotion/styled';
import { colors, breakPoints } from 'base-styles/variables';
import { VscClose } from 'react-icons/vsc';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(87, 86, 86, 0.6);
  z-index: 1200;
`;

export const ModalView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 92px;
  transform: translate(-50%);

  width: 280px;
  height: 287px;

  padding: 16px;
  padding-top: 68px;
  padding-bottom: 60px;

  text-align: center;
  border-radius: 12px;
  background-color: ${colors.white};

  z-index: 1201;

  @media screen and (min-width: ${breakPoints.tablet}) {
    width: 608px;
    height: 354px;
    padding: 60px;
    border-radius: 40px;
  }
`;

export const CloseButton = styled.button`
  display: flex;

  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;

  @media screen and (min-width: ${breakPoints.tablet}) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled(() => (
  <VscClose
    color={colors.blue}
    style={{
      width: '24px',
      height: '24px',
    }}
  >
    <button></button>
  </VscClose>
))``;
