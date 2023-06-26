import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledModalBox = styled.div`
  background: white;
  padding: 2rem;
  width: 100%;
  max-width: 25rem;
`;
