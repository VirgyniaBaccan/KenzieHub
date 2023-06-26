import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.125rem;
  width: 90%;
  max-width: 23.125rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.0152rem;
  gap: 0.6344rem;

  width: 4.2181rem;
  height: 2.5069rem;

  background: var(--color-grey-3);
  border-radius: 0.25rem;

  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.75rem;
  text-align: center;
  color: var(--color-grey-0);
`;
