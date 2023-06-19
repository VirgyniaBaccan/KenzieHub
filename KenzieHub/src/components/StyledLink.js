import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1.3959rem;
  gap: 0.6344rem;

  width: 100%;
  height: 3rem;

  background: var(--color-grey-1);
  border: 0.0761rem solid var(--color-grey-1);
  border-radius: 0.25rem;

  :hover {
    background: var(--color-grey-2);
    border: var(--color-grey-2);
  }
`;
