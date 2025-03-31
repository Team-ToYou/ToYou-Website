import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 393px;
  min-height: 53.25rem;
  background: linear-gradient(to bottom, #f4dddd 0%, #f98f8f 100%);
  position: relative;
`;

export const CTASection = styled.div`
  font-family: 'Pretendard';
  font-size: 1.25rem;
  font-weight: var(--weight-semibold);
  line-height: 1.75rem;
  position: absolute;
  top: 6.25rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 15.625rem;
`;

export const DownloadButton = styled.div`
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
  font-size: 0.9888rem;
  font-weight: var(--weight-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const MainImageWrapper = styled.img`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`;

export const GuideContainer = styled.div`
  width: 393px;
  min-height: 177.0625rem;
  background: #ffffff;
  position: relative;
`;

export const GuideText = styled.p`
  font-family: 'Pretendard';
  font-size: 1.125rem;
  font-weight: var(--weight-semibold);
  line-height: 1.75rem;
  position: absolute;
  top: 39.375rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 18.75rem;
`;

export const GuideImage = styled.img`
  position: absolute;
  top: 3.4375rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const StepBadge = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 17.125rem;
  width: 4.3125rem;
  height: 1.75rem;
  border-radius: 0.875rem;
  background-color: #a8dcb5;
  font-family: Pretendard;
  font-size: 0.525rem;
  font-weight: var(--weight-extrabold);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepHeader = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 3.5625rem;
  display: flex;
  gap: 0.375rem;
  align-items: center;
`;

export const StepLine = styled.div`
  width: 0.1875rem;
  height: 1.6875rem;
  background-color: black;
`;

export const StepTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: var(--weight-bold);
`;

export const StepDescription = styled.div`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 3.5625rem;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: var(--weight-medium);
  line-height: 1.125rem;
`;

export const StepImage = styled.img`
  position: absolute;
  top: ${({ top }) => top}px;
  left: 50%;
  transform: translateX(-50%);
`;
