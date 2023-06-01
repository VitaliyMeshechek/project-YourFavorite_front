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
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 280px;
  padding: ${({ padding }) => (padding !== '' ? padding : '60px 12px')};

  text-align: center;
  border-radius: 20px;
  background-color: ${colors.white};

  z-index: 1201;

  @media screen and (min-width: ${breakPoints.tablet}) {
    justify-content: center;

    padding: ${({ padding }) => padding !== '' && '32px 32px 24px 32px'};
    width: ${({ padding }) => (padding !== '' ? '680px' : '608px')};
    height: ${({ padding }) => (padding !== '' ? 'auto' : '354px')};

    border-radius: 40px;
  }
`;

export const CloseButton = styled.button`
  display: flex;

  position: absolute;
  top: 12px;
  right: 12px;

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
