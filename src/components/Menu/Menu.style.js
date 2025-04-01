import styled from 'styled-components';

export const OverlayMenu = styled.div`
  position: fixed;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 13.875rem;
  background-color: #ffffff;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  z-index: 1;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.563rem;
  padding-left: 0.938rem;
  align-self: center;
  font-family: 'Pretendard';
  font-weight: var(--weight-light);
  font-size: 0.938rem;
  cursor: pointer;
`;
