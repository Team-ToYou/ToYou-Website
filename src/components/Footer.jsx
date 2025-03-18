import styled from 'styled-components';
import emailIcon from '../assets/email.svg';
import instagramIcon from '../assets/instagram.svg';

const FooterLine = styled.div`
  height: 0.063rem;
  width: 100%;
  background-color: #d9d9d9;
`;

const FooterContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
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

const Button = styled.button`
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
      <FooterLine />
      <FooterContainer>
        <p>COPYRIGHT TEAM TOYOU</p>
        <div className="btn-group">
          <Button onClick={() => window.open('mailto:toyou1966@gmail.com')}>
            <img src={emailIcon} alt="email icon" />
          </Button>
          <Button
            onClick={() => window.open('https://www.instagram.com/toyou.app/')}
          >
            <img src={instagramIcon} alt="instagram icon" />
          </Button>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
