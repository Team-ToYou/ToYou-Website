import styled from 'styled-components';

export const OverlayMenu = styled.div`
  position: fixed;
  top: 5.063rem;
  left: 50%;
  transform: translateX(-50%);
  width: 393px;
  height: 13.875rem;
  background-color: #ffffff;
  display: ${(props) => (props.open ? 'flex' : 'none')};
`;

export const MenuContent = styled.div`
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
