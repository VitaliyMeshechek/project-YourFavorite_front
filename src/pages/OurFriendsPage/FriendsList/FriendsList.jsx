import { FriendsItem } from '../FriendsItem/FriendsItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendsItem
          imageUrl={friend.imageUrl}
          url={friend.url}
          title={friend.title}
          time={friend.workDays}
          address={friend.address}
          email={friend.email}
          phone={friend.phone}
        />
      ))}
    </List>
  );
};
