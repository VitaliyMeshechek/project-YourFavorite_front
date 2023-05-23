import {
  FlexContainer,
  ImgWrapper,
  Item,
  ItemLink,
  SpanColor,
  TextContent,
  WrapperContent,
} from './FriendsItem.styled';

export const FriendsItem = ({
  title,
  workDays,
  address,
  email,
  phone = '12343',
  url,
  imageUrl,
}) => {
  return (
    <Item>
      <ItemLink href={url}>{title}</ItemLink>
      <FlexContainer>
        <ImgWrapper src={imageUrl} alt="" />
        <WrapperContent>
          <TextContent>
            <SpanColor>time:</SpanColor>
            <br /> {workDays}
          </TextContent>
          <TextContent>
            <SpanColor>adress:</SpanColor>
            <br />
            {address}
          </TextContent>
          <TextContent>
            <SpanColor>email:</SpanColor>
            <br />
            {email}
          </TextContent>
          <TextContent>
            <SpanColor>phone:</SpanColor>
            {phone}
          </TextContent>
        </WrapperContent>
      </FlexContainer>
    </Item>
  );
};
