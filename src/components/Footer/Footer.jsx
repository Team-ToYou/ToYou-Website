import emailIcon from '@/assets/email.svg';
import instagramIcon from '@/assets/instagram.svg';
import { FooterDivider, FooterContainer, LinkButton } from './Footer.style';

const Footer = () => {
  return (
    <>
      <FooterDivider />
      <FooterContainer>
        <p>COPYRIGHT TEAM TOYOU</p>
        <div className="btn-group">
          <LinkButton onClick={() => window.open('mailto:toyou1966@gmail.com')}>
            <img src={emailIcon} alt="email icon" />
          </LinkButton>
          <LinkButton
            onClick={() => window.open('https://www.instagram.com/toyou.app/')}
          >
            <img src={instagramIcon} alt="instagram icon" />
          </LinkButton>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
