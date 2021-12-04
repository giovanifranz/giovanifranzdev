import { css } from "@emotion/react";

export const GlobalStyles = css`
  :root {
    --blue: #00a8ff;
    --blue-dark: #006599;
    --blue-darker: #00324c;
    --white: #ffffff;
    --black: #1d1d1b;
    --gray: #6f7380;
    --gray-dark: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 1080px) {
      font-size: 87.5%;
    }
    overflow: hidden;
  }
  body {
    background: var(--black);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  textarea,
  button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    filter: brightness(1.2);
  }

  a {
    color: var(--white);
  }

  a:hover {
    filter: brightness(0.8);
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
