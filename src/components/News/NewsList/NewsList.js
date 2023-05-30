import NewsItem from '../NewsItem/NewsItem';

const { List } = require('./NewsList.styled');

const NewsList = ({ news }) => {
  return (
    <List>
      {news.map(el => {
        const { _id } = el;
        return <NewsItem key={_id} item={el}></NewsItem>;
      })}
    </List>
  );
};

export default NewsList;
