import { FlexContainer, Item } from './ItemSearch.styled';

export const ItemSearch = ({ img, title, location, old, sex }) => {
  return (
    <Item>
      <img src={img} alt="name_1" />
      <p>{title}</p>
      <FlexContainer>
        <p>{location}</p>
        <p>{old}</p>
        <p>{sex}</p>
      </FlexContainer>
    </Item>
  );
};
