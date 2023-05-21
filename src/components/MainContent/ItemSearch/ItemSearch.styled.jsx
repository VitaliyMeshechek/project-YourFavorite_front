import styled from '@emotion/styled';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai';
import { BiFemaleSign } from 'react-icons/bi';
import { TbPaw } from 'react-icons/tb';


export const Item = styled.li`
  padding-bottom: 24px;
  border-radius: 0px 0px 40px 40px;
  background-color: #fff;
  width: 288px;
  position: relative;
`;

export const IconLocation = styled(CiLocationOn)`
  width: 24px;
  height: 24px;
  fill: #54adff;
  padding: 2px 0;
  padding-left: 14px;
  padding-right: 4px;
`;

export const IconHeart = styled(AiOutlineHeart)`
  width: 24px;
  height: 24px;
  fill: #54adff;
  padding: 8px 3px;
`;

export const HeartButton = styled.button`
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  background-color: #cce4fb;
  cursor: pointer;
  border: none;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 20;
`;

export const PriceTitle = styled.div`
  background: #cce4fb;
  border-radius: 0px 16px 16px 0px;
  width: 126px;
  padding: 11px 17px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  position: absolute;
  bottom: 410px;
  left: 0;
  z-index: 20;
`;

export const IconClock = styled(AiOutlineClockCircle)`
  width: 24px;
  height: 24px;
  fill: #54adff;
  padding: 2px 0;
  padding-left: 8.5px;
  padding-right: 4px;
`;

export const IconSex = styled(BiFemaleSign)`
  width: 24px;
  height: 24px;
  fill: #54adff;
  padding: 2px 0;
  padding-left: 5px;
  padding-right: 4px;
`;

export const FlexContainer = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;
  list-style: none;
  padding: 0;
  position: absolute;
  bottom: 192px;
  left: 10px;
`;

export const ListAboutPets = styled.li`
  height: 28px;
  background-color: #cce4fb;
  border-radius: 16px;
  width: 80px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;
`;

export const Img = styled.img`
  width: 288px;
  height: auto;
  position: relative;
`;

export const TitleCard = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  width: 231px;
  padding-left: 20px;
`;

export const PavsSvg = styled(TbPaw)`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  display: none;
`;

export const ButtonMore = styled.button`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.38;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #54adff;

  width: 248px;
  height: 38px;
  border: 2px solid #54adff;
  border-radius: 40px;
  cursor: pointer;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 22px;

  &:hover {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: 2px solid #54adff;
    border: none;
    color: #fff;
    background-color: #54adff;
    svg {
      display: initial;
    }
  }

  &:focus {
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: 2px solid #54adff;
    border: none;
    color: #fff;
    background-color: #54adff;
    svg {
      display: initial;
    }
  }
`;
