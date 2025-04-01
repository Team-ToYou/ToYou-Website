import styled from 'styled-components';

export const ProgressBar = styled.div`
  width: 0.1875rem;
  height: 29.2502rem;
  opacity: 0.5;
  background: rgba(172, 89, 89, 0.27);
  position: absolute;
  top: 12.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const MilestoneWrapper = styled.div`
  position: absolute;
  top: 14.375rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const MilestoneDot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  background: var(--pink);
  border-radius: 50%;
`;

export const MilestoneTitle = styled.div`
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-weight: var(--weight-bold);
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ isLeft }) => (isLeft ? 'auto' : '1.4375rem')};
  right: ${({ isLeft }) => (isLeft ? '1.4375rem' : 'auto')};
`;

export const MilestoneText = styled.div`
  font-family: Pretendard;
  font-size: 0.6875rem;
  font-weight: var(--weight-medium);
  line-height: 0.75rem;
  white-space: pre-line;
  position: absolute;
  top: ${({ top }) => top + 20}px;
  left: ${({ isLeft }) => (isLeft ? 'auto' : '1.4375rem')};
  right: ${({ isLeft }) => (isLeft ? '1.4375rem' : 'auto')};
  text-align: ${({ isLeft }) => (isLeft ? 'right' : 'left')};
  width: 12.5rem;
`;

export const Message = styled.div`
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: var(--weight-semibold);
  line-height: 1.25rem;
  position: absolute;
  top: 45.75rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 18.75rem;
`;
