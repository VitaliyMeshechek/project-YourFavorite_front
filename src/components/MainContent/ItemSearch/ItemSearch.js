import {
  ButtonMore,
  FlexContainer,
  HeartButton,
  IconClock,
  IconHeart,
  IconLocation,
  IconSex,
  ImgP,
  Item,
  ListAboutPets,
  PriceTitle,
  TitleCard,
} from './ItemSearch.styled';

export const ItemSearch = ({ imgp, title, location, old, sex, price }) => {
  return (
    <Item>
      <PriceTitle>{price}</PriceTitle>
      <HeartButton>
        <IconHeart />
      </HeartButton>
      <ImgP src={imgp} />
      <FlexContainer>
        <ListAboutPets>
          <IconLocation />
          {location}
        </ListAboutPets>
        <ListAboutPets>
          <IconClock />
          {old}
        </ListAboutPets>
        <ListAboutPets>
          <IconSex /> {sex}
        </ListAboutPets>
      </FlexContainer>
      <TitleCard>{title}</TitleCard>
      <ButtonMore type="button">Learn more</ButtonMore>
    </Item>
  );
};
