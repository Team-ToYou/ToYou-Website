import styled from 'styled-components';
import emailIcon from '@/assets/email.svg';
import instagramIcon from '@/assets/instagram.svg';
import { barContainer, Divider } from '@/styles/sharedStyles';

const FooterContainer = styled.div`
  ${barContainer}
  gap: 4.75rem;
  p {
    font-family: 'Pretendard';
    font-weight: var(--weight-regular);
    font-size: 0.875rem;
    margin-left: 1.75rem;
  }
  .btn-group {
    display: flex;
    gap: 0.75rem;
  }
`;

const LinkButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #c7c7c7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <>
      <Divider />
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
