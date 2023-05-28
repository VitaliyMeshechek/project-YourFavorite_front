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

const NewsItem = () => {
  const location = useLocation();

  return (
    <ItemWrapper>
      <Rectangle></Rectangle>

      <Item>
        <Img></Img>
        <DescWrapper>
          <Title>On Pets, Moral Logic and Love</Title>
          <Desc>
            In January, I fell in love with someone. It was the last thing I’d
            expect and caught me completely off guard.He has sandy blond hair
            with flecks of gray and gorgeous, sad eyes. He loves to go on walks
            and cuddle. His name is Herbie.
          </Desc>
          <BottomWrapper>
            <Date>15/03/2023</Date>
            <ReadMoreButton to="/" state={{ from: location }}>
              Read more
            </ReadMoreButton>
          </BottomWrapper>
        </DescWrapper>
      </Item>
    </ItemWrapper>
  );
};

export default NewsItem;
