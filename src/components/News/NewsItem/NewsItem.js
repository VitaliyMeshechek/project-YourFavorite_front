import {
  Item,
  Rectangle,
  Img,
  Title,
  DescWrapper,
  Desc,
  BottomWrapper,
  Date,
  ReadMoreButton,
  ItemWrapper,
} from './NewsItem.styled';
import { useLocation } from 'react-router-dom';

const NewsItem = ({ item: { imgUrl, date, text, title, url } }) => {
  const location = useLocation();

  const dateFormat = date => {
    const arr = date.slice(0, 10).split('-');
    const newDate = `${arr[2]}/${arr[1]}/${arr[0]}`;
    return newDate;
  };

  return (
    <ItemWrapper>
      <Rectangle></Rectangle>

      <Item>
        <Img src={imgUrl} alt={title}></Img>
        <DescWrapper>
          <Title>{title}</Title>
          <Desc>{text}</Desc>
          <BottomWrapper>
            <Date>{dateFormat(date)}</Date>
            <ReadMoreButton
              href={url}
              target="_blank"
              state={{ from: location }}
            >
              Read more
            </ReadMoreButton>
          </BottomWrapper>
        </DescWrapper>
      </Item>
    </ItemWrapper>
  );
};

export default NewsItem;
