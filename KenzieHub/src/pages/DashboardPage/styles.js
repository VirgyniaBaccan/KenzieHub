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

  .div__techs {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    max-width: 56.25rem;
    margin-top: 20px;
  }

  @media (max-width: 43.75rem) {
    .div__user {
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
    }
  }
`;

export const StyledTechDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: blue;
  margin-top: 1.25rem;
  background: var(--color-grey-3);
  padding: 2rem;
  gap: 1.5625rem;
  margin-bottom: 2rem;
  cursor: pointer;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: var(--color-grey-4);
    padding: 0.8rem;
  }

  li:hover {
    background: var(--color-grey-2);
  }

  .title__tech {
    font-size: 0.875rem;
    color: var(--color-grey-0);
  }

  .status__tech {
    font-size: 0.75rem;
    color: var(--color-grey-1);
  }
`;

export const StyledButtonPlus = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  color: white;
  background: var(--color-grey-2);
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;

  :hover {
    background: var(--color-grey-3);
  }
`;
