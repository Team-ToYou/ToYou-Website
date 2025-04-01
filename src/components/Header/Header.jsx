import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.svg';
import listIcon from '@/assets/list.svg';
import closeIcon from '@/assets/close.svg';
import Menu from '@/components/Menu/Menu';
import {
  HeaderDivider,
  HeaderContainer,
  DownloadButton,
  IconButton,
} from './Header.style';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <HeaderContainer isScrolled={isScrolled} isOpen={isOpen}>
        <img
          className="logo"
          onClick={() => nav('/')}
          src={logo}
          alt="toyou logo"
        />
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
      <HeaderDivider isOpen={isOpen} />
    </>
  );
};

export default Header;
