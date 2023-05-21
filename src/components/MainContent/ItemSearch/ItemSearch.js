import {
  ButtonMore,
  FlexContainer,
  HeartButton,
  IconClock,
  IconHeart,
  IconLocation,
  IconSex,
  Img,
  Item,
  ListAboutPets,
  PriceTitle,
  TitleCard,
} from './ItemSearch.styled';

export const ItemSearch = ({ pict, title, location, old, sex, price }) => {
  return (
    <Item>
      <PriceTitle>{price}</PriceTitle>
      <HeartButton>
        <IconHeart />
      </HeartButton>
      <Img src={pict} alt="name_1" />
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
