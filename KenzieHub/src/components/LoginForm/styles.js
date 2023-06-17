import styled from "styled-components";

export const StyledLoader = styled.div`
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid var(--color-primary);
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  margin-top: 30%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
