import { AuthWrapper, AuthLink, Icon } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrapper>
      <AuthLink to="/login">
        Log IN
        <Icon />
      </AuthLink>
      <AuthLink to="/register">Registration</AuthLink>
    </AuthWrapper>
  );
};
