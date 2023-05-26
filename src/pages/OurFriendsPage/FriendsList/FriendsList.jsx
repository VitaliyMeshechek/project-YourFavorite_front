import { FriendsItem } from '../FriendsItem/FriendsItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendsItem key={friend.title} friend={friend} />
      ))}
    </List>
  );
};
