import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.625rem 1.375rem;
  gap: 1.375rem;

  width: 90%;
  max-width: 23.125rem;
  height: 100%;

  overflow-y: auto;
  background: var(--color-grey-3);
  box-shadow: 0rem .25rem 2.5rem -.625rem rgba(0, 0, 0, 0.25);
  border-radius: .25rem;
`;
