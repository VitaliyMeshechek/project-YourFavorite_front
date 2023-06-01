import { useDispatch, useSelector } from 'react-redux';
import ModalWrapper from '../ModalWrapper';
import {
  Desc,
  Img,
  Title,
  DescWrapper,
  InfoList,
  InfoName,
  InfoValue,
  InfoLink,
  InfoNameList,
  InfoValueList,
  ButtonFlexWrapper,
  CancelButton,
  CancelButtonText,
  ApproveButton,
  ApproveButtonText,
  HeartIcon,
  FlexWrapper,
  Category,
  ImgWrapper,
} from './NoticeModal.styled';

import { showModal } from 'redux/modal/slice';
import { useEffect, useState } from 'react';
import { fetchUserById } from 'redux/noticesPage/operations';
import { selectUserById } from 'redux/noticesPage/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const NoticeModal = ({
  pet,
  handleFavorite,
  // approveHandle,
  // addToFavorite,
}) => {
  const dispatch = useDispatch();
  const [
    {
      avatarURL,
      location,
      birthday,
      breed,
      comments,
      name,
      sex,
      category,
      title,
    },
    setPetInfo,
  ] = useState({});

  const user = useSelector(selectUserById);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleApprove = () => {
    // addToFavorite();
    dispatch(showModal(false));
  };

  useEffect(() => {
    if (!pet) {
      return;
    }
    setPetInfo(pet);
    dispatch(fetchUserById(pet._id));
  }, [dispatch, pet]);

  return (
    <ModalWrapper padding="44px 12px 16px 12px">
      <FlexWrapper>
        <ImgWrapper>
          <Img src={avatarURL} alt={name}></Img>
          <Category>{category}</Category>
        </ImgWrapper>

        <DescWrapper>
          <Title>{title}</Title>

          <InfoList>
            <InfoNameList>
              <InfoName>Name:</InfoName>
              <InfoName>Birthday:</InfoName>
              <InfoName>Breed:</InfoName>
              <InfoName>Place:</InfoName>
              <InfoName>The sex:</InfoName>
              <InfoName>Email:</InfoName>
              <InfoName>Phone:</InfoName>
            </InfoNameList>
            <InfoValueList>
              <InfoValue>{name}</InfoValue>
              <InfoValue>{birthday}</InfoValue>
              <InfoValue>{breed}</InfoValue>
              <InfoValue>{location}</InfoValue>

              <InfoValue>{sex}</InfoValue>

              <InfoValue>
                <InfoLink>{user.email ? user.email : 'none'}</InfoLink>
              </InfoValue>
              <InfoValue>
                <InfoLink href={user.phone ? user.phone : ''}>
                  {user.phone ? user.phone : '+380'}
                </InfoLink>
              </InfoValue>
            </InfoValueList>
          </InfoList>
        </DescWrapper>
      </FlexWrapper>
      <Desc>{comments}</Desc>
      <ButtonFlexWrapper>
        <CancelButton onClick={() => dispatch(showModal(false))}>
          <CancelButtonText>
            <a href="tel:">Contact</a>
          </CancelButtonText>
        </CancelButton>
        <ApproveButton onClick={handleFavorite}>
          <ApproveButtonText>Add to</ApproveButtonText>
          <HeartIcon />
        </ApproveButton>
      </ButtonFlexWrapper>
    </ModalWrapper>
  );
};

export default NoticeModal;
