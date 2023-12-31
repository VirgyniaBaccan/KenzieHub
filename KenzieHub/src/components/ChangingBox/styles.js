import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 96%;
  max-width: 23.125rem;
  height: max-content;
  gap: 1rem;
  background: var(--color-grey-3);
  gap: 20px;

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

  .buttonX {
    color: var(--color-grey-1);
  }

  h2 {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  .div__buttons {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 0.625rem;

    font-size: 1rem;
  }
  
  .button__save {
    font-size: 1rem;
  }
`;
