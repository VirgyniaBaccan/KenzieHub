import styled from "styled-components";

export const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0rem 1.0152rem;
  gap: 0.6344rem;
  width: 98%;
  height: 3rem;
  background: var(--color-grey-2);
  border: 1.2182px solid var(--color-grey-2);
  border-radius: 0.25rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.0152rem;
  line-height: 1.625rem;

  ::placeholder {
    color: var(--color-grey-1);
  }

  :focus {
    color: var(--color-grey-0);
    ::placeholder {
      color: var(--color-grey-0);
    }
  }
`;
