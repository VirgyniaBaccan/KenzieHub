import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  max-width: 23.125rem;
  height: max-content;
  gap: 1rem;
  background: var(--color-grey-3);

  .div__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3.125rem;
    color: var(--color-grey-0);
    background: var(--color-grey-2);
    padding: 0.75rem 1.125rem 0.75rem 1.125rem;
    font-weight: 400;
    font-size: 0.75rem;
    font-style: normal;
  }

  .div__form-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 1rem;
    gap: 20px;
  }

  label {
    font-style: normal;
    font-size: 0.75rem;
    font-weight: 400;
  }

  .form__select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 3rem;
    border-radius: 0.25rem;
    border: none;
    text-indent: 0.8125rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;

    background: var(--color-grey-2);
    color: var(--color-grey-0);

    ::placeholder {
      font-weight: 400;
      font-size: 1rem;
      color: var(--color-grey-0);
    }
  }

  option {
    font-weight: 400;
    font-size: 1rem;
  }

  .buttonX {
    color: var(--color-grey-1);
  }

  h2 {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 0rem;
    color: var(--color-negative);
  }
`;
