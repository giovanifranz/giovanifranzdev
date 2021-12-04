import styled from "@emotion/styled";

export const Box = styled.div`
  width: 720px;
  z-index: 0;

  h1,
  h2,
  h6 {
    background: -webkit-linear-gradient(var(--white), var(--gray));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h6 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--blue);
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;
