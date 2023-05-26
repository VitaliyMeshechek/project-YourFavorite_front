import { LogoLink, LogoImg } from './Logo.styled';
import logoSmall1x from '../../../images/logo/logo_small@1x.png';
import logoSmall2x from '../../../images/logo/logo_small@2x.png';
import logoBig1x from '../../../images/logo/logo_big@1x.png';
import logoBig2x from '../../../images/logo/logo_big@2x.png';

export const Logo = ({ close }) => {
  return (
    <LogoLink to="/main" onClick={close}>
      <picture>
        <source
          srcSet={`${logoBig1x} 1x, ${logoBig2x} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`}
          media="(min-width: 320px)"
        />
        <LogoImg src={logoSmall1x} alt="Logo" />
      </picture>
    </LogoLink>
  );
};
