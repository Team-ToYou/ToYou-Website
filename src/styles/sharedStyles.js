import styled, { css } from 'styled-components';

export const barContainer = css`
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  position: fixed;
  top: 5rem;
  width: 393px;
  height: 0.031rem;
  background-color: #d9d9d9;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 1;
`;
