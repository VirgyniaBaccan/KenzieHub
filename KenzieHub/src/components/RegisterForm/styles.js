import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2.625rem 1.375rem;
  gap: 1.375rem;

  width: 90%;
  max-width: 23.125rem;
  height: max-content;
  margin-bottom: 1.875rem;

  background: var(--color-grey-3);
  box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: var(--color-grey-1);
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
    color: var(--color-negative);
  }

  select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem 1.0152rem;
    gap: 0.6344rem;
    width: 100%;
    height: 3rem;
    background: var(--color-grey-2);
    border: 0.0761rem solid var(--color-grey-2);
    border-radius: 0.25rem;

    font-style: normal;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.625rem;

    color: var(--color-grey-1);
  }
`;
