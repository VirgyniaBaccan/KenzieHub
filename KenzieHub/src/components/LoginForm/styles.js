import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.625rem 1.375rem;
  gap: 1.375rem;
  width: 90%;
  max-width: 23.125rem;
  height: max-content;
  margin: 1rem;

  background: var(--color-grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLoader = styled.div`
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid var(--color-primary);
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  margin-top: 20%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
