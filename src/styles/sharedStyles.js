import styled, { css } from 'styled-components';

export const barContainer = css`
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 393px;
  min-height: 53.25rem;
  position: relative;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 7.375rem;
  left: 1.9375rem;
  display: flex;
  flex-direction: column;
`;

export const TeamTitle = styled.h1`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
`;

export const Underline = styled.div`
  height: 0.1875rem;
  background: #ffe484;
  margin-top: 0.25rem;
`;
