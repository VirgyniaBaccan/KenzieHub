import styled from "styled-components";

export const StyledButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.3959rem;
  gap: 0.6344rem;

  width: 100%;
  height: 3rem;
  background: var(--color-primary);

  border: 0.0761rem solid var(--color-primary);
  border-radius: 0.2538rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.625rem;

  color: var(--color-grey-0);

  :hover {
    background: var(--color-primary-50);
  }
`;
