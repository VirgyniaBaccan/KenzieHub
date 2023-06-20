import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-3);

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 56.25rem;
    height: 4.5rem;
    margin: 1rem;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .div__user-container {
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);
  }

  .div__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 56.25rem;
    height: 7rem;
  }

  .div__infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    max-width: 56.25rem;
    gap: 1.25rem;
    margin-top: 2.5rem;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.375rem;
    color: var(--color-grey-1);
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media (max-width: 43.75rem) {
    .div__user {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
`;
