import styled from 'styled-components';
import { barContainer } from '@/styles/sharedStyles';

export const HeaderContainer = styled.div`
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

export const DownloadButton = styled.button`
  width: 5.188rem;
  height: 1.875rem;
  border-radius: 0.875rem;
  background-color: var(--pink);
  font-family: 'Pretendard';
  font-weight: var(--weight-medium);
  font-size: 0.75rem;
`;

export const IconButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
