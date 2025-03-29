import styled from 'styled-components';
import logo from '@/assets/logo.svg';
import listIcon from '@/assets/list.svg';
import closeIcon from '@/assets/close.svg';
import { barContainer, Divider } from '@/styles/sharedStyles';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '@/components/Menu/Menu';

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

const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // URL이 변경될 때마다 오버레이 닫기
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <HeaderContainer>
        <img className="logo" src={logo} alt="toyou logo" />
        <div className="btn-group">
          <DownloadButton
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.toyou.toyouandroid'
              )
            }
          >
            앱 다운로드
          </DownloadButton>
          <IconButton onClick={toggleOverlay}>
            <img
              src={isOpen ? closeIcon : listIcon}
              alt={isOpen ? '닫기' : '메뉴 열기'}
            />
          </IconButton>
        </div>
      </HeaderContainer>
      <Menu open={isOpen} onClose={() => setIsOpen(false)} />
      <Divider />
    </>
  );
};

export default Header;
