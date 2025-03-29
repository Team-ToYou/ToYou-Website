import styled from 'styled-components';
import { barContainer } from '@/styles/sharedStyles';

export const FooterContainer = styled.div`
  ${barContainer}
  gap: 4.75rem;
  p {
    font-family: 'Pretendard';
    font-weight: var(--weight-regular);
    font-size: 0.875rem;
    margin-left: 1.75rem;
  }
  .btn-group {
    display: flex;
    gap: 0.75rem;
  }
`;

export const LinkButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #c7c7c7;
  display: flex;
  align-items: center;
  justify-content: center;
`;
