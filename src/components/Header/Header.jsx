import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useMobileOS from '@/hooks/useMobileOS';
import handleAppDownload from '@/utils/handleAppDownload';
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

  const menuRef = useRef(null);

  const toggleOverlay = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleClickOutside = (e) => {
    // 메뉴 토글 버튼 클릭은 무시
    const toggleButton = document.querySelector('.btn-group IconButton');
    if (toggleButton && toggleButton.contains(e.target)) {
      return;
    }

    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(false);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside); // 이벤트 리스너 제거
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const os = useMobileOS();

  const handleDownload = () => {
    handleAppDownload(os);
  };

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
          <DownloadButton onClick={handleDownload}>앱 다운로드</DownloadButton>
          <IconButton onClick={toggleOverlay}>
            <img
              src={isOpen ? closeIcon : listIcon}
              alt={isOpen ? '닫기' : '메뉴 열기'}
            />
          </IconButton>
        </div>
      </HeaderContainer>
      <Menu ref={menuRef} open={isOpen} onClose={() => setIsOpen(false)} />
      <HeaderDivider isOpen={isOpen} />
    </>
  );
};

export default Header;
