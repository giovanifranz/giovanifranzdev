import { css } from "@emotion/react";

export const GlobalStyles = css`
  :root {
    --blue: #05aff2;
    --white: #fff;
    --black: #090c13;
    --gray: #b1b6c7;
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
    background: -webkit-linear-gradient(var(--white), var(--gray));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }

  button {
    cursor: pointer;
  }
  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
