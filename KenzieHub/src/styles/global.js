import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
		--font-primary: 'Inter', sans-serif;
	--color-primary: #;
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
	flex-direction: column;
	justify-content: center;
	background: var(--color-grey-4);
	color: var(--color-grey-0);
	width: 100%;
}

.toast__message {
	background: var(--color-grey-2);
	font-style: normal;
	font-weight: 700;
	font-size: .875rem;
	line-height: 1.5rem;
	color: var(--color-grey-0);
}`;
