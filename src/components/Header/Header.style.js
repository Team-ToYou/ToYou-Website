import styled from 'styled-components';
import { barContainer } from '@/styles/sharedStyles';

export const HeaderDivider = styled.div`
  position: fixed;
  top: 5rem;
  width: 393px;
  height: 0.031rem;
  background-color: #d9d9d9;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  ${barContainer}
  position: fixed;
  width: 393px;
  gap: 11.375rem;
  .logo {
    padding-left: 1.25rem;
    cursor: pointer;
  }
  .btn-group {
    display: flex;
    gap: 0.5rem;
  }
  background: ${({ isOpen, isScrolled }) =>
    isOpen ? '#ffffff' : isScrolled ? '#ffffff' : 'transparent'};
  z-index: 1;
`;

export const DownloadButton = styled.button`
  width: 5.188rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  background-color: var(--pink);
  font-family: 'Pretendard';
  font-weight: var(--weight-medium);
  font-size: 0.75rem;
  color: #000000;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
