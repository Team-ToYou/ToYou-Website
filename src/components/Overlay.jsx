import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const OverlayMenu = styled.div`
  position: fixed;
  top: 5.063rem;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 13.875rem;
  background-color: #ffffff;
  display: ${(props) => (props.open ? 'flex' : 'none')};
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  padding-left: 0.938rem;
  align-self: center;
  font-family: 'Pretendared';
  font-weight: var(--weight-light);
  font-size: 0.938rem;
  cursor: pointer;
`;

const Overlay = ({ open }) => {
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

export default Overlay;
