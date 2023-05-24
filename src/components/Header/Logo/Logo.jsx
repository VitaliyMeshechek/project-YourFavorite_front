import { LogoLink, LogoImg } from './Logo.styled';
import logo from '../../../images/logo/logo.png';

export const Logo = () => {
  return (
    <LogoLink to="/main">
      <LogoImg src={logo} alt="Logo" />
    </LogoLink>
  );
};
