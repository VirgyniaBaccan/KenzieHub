import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

button {
    cursor: pointer;
    background: transparent;
    border: none;
}

a {
    text-decoration: none;
    color: unset;
}

ul, ol {
    list-style: none;
}

input {
    border-radius: 0;
    border: none;
    background: transparent; 
}

img {
    max-width: 100%;
}

body {
    width: 100vw;
    height: 100vh;
    font-family: var(--font-primary)
};
`;
