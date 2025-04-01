import styled from 'styled-components';

export const Section = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 1.9375rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-weight: var(--weight-semibold);
  color: ${(props) => props.color};
`;

export const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8ch;
  row-gap: 2.875rem;
  margin-top: 2rem;
`;

export const MemberRole = styled.h3`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: var(--weight-semibold);
`;

export const MemberList = styled.p`
  font-family: 'Pretendard';
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  line-height: 1rem;
  margin-top: 0.625rem;
`;
