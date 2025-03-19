import styled from 'styled-components';
import logo from '../assets/logo.svg';
import listIcon from '../assets/list.svg';
import { barContainer, Divider } from '../styles/sharedStyles';

const HeaderContainer = styled.div`
  ${barContainer}
  gap: 11.375rem;
  .logo {
    padding-left: 1.25rem;
  }
  .btn-group {
    display: flex;
    gap: 0.5rem;
  }
`;

const DownloadButton = styled.button`
  width: 5.188rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  background-color: var(--pink);
  font-family: 'Pretendard';
  font-weight: var(--weight-medium);
  font-size: 0.75rem;
`;

const ListButton = styled.button`
  background-color: transparent;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <img className="logo" src={logo} alt="toyou logo" />
        <div className="btn-group">
          <DownloadButton>앱 다운로드</DownloadButton>
          <ListButton className="list-btn">
            <img src={listIcon} alt="list icon" />
          </ListButton>
        </div>
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default Header;
