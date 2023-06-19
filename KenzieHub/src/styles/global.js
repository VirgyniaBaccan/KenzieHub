import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
    --font-primary: 'Inter', sans-serif;
	--color-primary: #ff577fff;
	--color-primary-50: #ff427fff;
	--color-primary-disable: #59323fff;
	--color-grey-4: #121214ff;
	--color-grey-3: #212529ff;
	--color-grey-2: #343b41ff;
	--color-grey-1: #868e96ff;
	--color-grey-0: #f8f9faff;
	--color-sucess: #3fe864ff;
	--color-negative: #e83f5bff;
}

.App {
	display: flex;
	justify-content: center;
	background-color: var(--color-grey-4);
	color: var(--color-grey-0);
	width: 100%;
	height: 100vh;
}`;	
