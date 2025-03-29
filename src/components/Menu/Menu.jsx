import { useNavigate } from 'react-router-dom';
import { OverlayMenu, MenuContent } from './Menu.style';

const Menu = ({ open }) => {
  const nav = useNavigate();

  return (
    <OverlayMenu open={open}>
      <MenuContent>
        <p onClick={() => nav('/TeamToYou')}>Team ToYou</p>
        <p onClick={() => nav('/History')}>History</p>
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
};

export default Menu;
