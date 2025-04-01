import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OverlayMenu, MenuContent } from './Menu.style';

const Menu = React.forwardRef(({ open, onClose }, ref) => {
  const nav = useNavigate();

  return (
    <OverlayMenu open={open} ref={ref}>
      <MenuContent>
        <p
          onClick={() => {
            nav('/TeamToYou');
            if (onClose) onClose();
          }}
        >
          Team ToYou
        </p>
        <p
          onClick={() => {
            nav('/History');
            if (onClose) onClose();
          }}
        >
          History
        </p>
        <p onClick={() => window.open('http://pf.kakao.com/_xiuPIn/chat')}>
          고객센터
        </p>
        <p onClick={() => window.open('https://forms.gle/fJweAP16cT4Tc3cA6')}>
          피드백하기
        </p>
        <p onClick={() => window.open('https://teamtoyou.tistory.com/')}>
          팀블로그
        </p>
      </MenuContent>
    </OverlayMenu>
  );
});

export default Menu;
