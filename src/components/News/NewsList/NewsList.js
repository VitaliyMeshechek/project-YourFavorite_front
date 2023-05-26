import NewsItem from '../NewsItem/NewsItem';

const { List } = require('./NewsList.styled');

const NewsList = () => {
  return (
    <List>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </List>
  );
};

export default NewsList;
