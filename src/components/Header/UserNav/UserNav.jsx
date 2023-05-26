import { useAuth } from 'hooks';
import {
  UserWrapper,
  UserLink,
  Avatar,
  UserName,
  AvatarLink,
  // AvatarImg,
} from './UserNav.styled';

export const UserNav = () => {
  const { user } = useAuth();
  const defaultName = user.email ? user.email.split('@')[0] : 'User';

  return (
    <UserWrapper>
      <UserLink to="/user">
        <Avatar />
        {/* <UserAvatar /> */}
        <UserName>{user.name ? user.name : defaultName}</UserName>
      </UserLink>
    </UserWrapper>
  );
};

export const NavAvatar = () => {
  return (
    <AvatarLink to="/user">
      <Avatar />
      {/* <UserAvatar /> */}
    </AvatarLink>
  );
};

// const photo =
//   ' https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
// export const UserAvatar = () => {
//   return <AvatarImg src={photo} alt="User avatar" />;
// };
