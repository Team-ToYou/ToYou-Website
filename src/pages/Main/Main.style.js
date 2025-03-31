import styled from 'styled-components';

export const MainBackground = styled.div`
  width: 393px;
  min-height: 53.25rem;
  background: linear-gradient(to bottom, #f4dddd 0%, #f98f8f 100%);
  position: relative;
`;

export const CTAText = styled.div`
  font-family: 'Pretendard';
  font-weight: var(--weight-semibold);
  font-size: 1.25rem;
  line-height: 1.75rem;
  position: absolute;
  top: 6.25rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 15.625rem;
`;

export const CTAButton = styled.div`
  width: 7.0625rem;
  height: 2.4719rem;
  border-radius: 1.0625rem;
  background-color: var(--pink);
  box-shadow: 0rem 0.2825rem 0.2825rem rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 4.6875rem;
  left: 50%;
  transform: translateX(-50%);
  font-family: Pretendard;
  font-weight: var(--weight-medium);
  font-size: 0.9888rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MainImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
