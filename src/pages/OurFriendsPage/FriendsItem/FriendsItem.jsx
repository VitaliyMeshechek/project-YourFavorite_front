import {
  FlexContainer,
  ImgWrapper,
  Item,
  ItemLinkTitle,
  LinkItem,
  SpanColor,
  TextContent,
  WrapperContent,
  TimeText,
} from './FriendsItem.styled';

import { TimePicker } from '../TimePicker/TimePicker';

export const FriendsItem = ({
  friend: { title, workDays, address, email, phone, url, imageUrl, addressUrl },
}) => {
  if (imageUrl === null) {
    imageUrl = 'https://plastyr.in.ua/image/catalog/no-photo.png';
  }

  return (
    <Item>
      <ItemLinkTitle href={url} target="blank">
        {title}
      </ItemLinkTitle>
      <FlexContainer>
        <ImgWrapper src={imageUrl} alt={title} target="blank" />
        <WrapperContent>
          <TextContent>
            <SpanColor>time:</SpanColor>
            <br />
             {workDays?.length ? (
                           <TimePicker workDays={workDays} />) :
                            ( <TimeText>day and night</TimeText>
                        )}
          </TextContent>
          <TextContent>
            <LinkItem href={addressUrl} target="blank">
              <SpanColor>adress:</SpanColor>
              <br />
              {address}
            </LinkItem>
          </TextContent>
          <TextContent>
            <LinkItem href={`mailto:${email}`} target="blank">
              <SpanColor>email:</SpanColor>
              <br />
              {email}
            </LinkItem>
          </TextContent>
          <TextContent>
            <LinkItem target="blank" href={`tel:${phone}`}>
              <SpanColor>phone:</SpanColor>
              <br />
              {phone}
            </LinkItem>
          </TextContent>
        </WrapperContent>
      </FlexContainer>
    </Item>
  );
};
