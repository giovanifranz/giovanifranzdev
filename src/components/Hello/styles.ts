import styled from "@emotion/styled";

export const Box = styled.div`
  width: 720px;
  z-index: 0;

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

  button {
    background-color: transparent;
    border-radius: 0.5rem;
    border: 1px solid var(--blue);
    color: var(--blue);
    width: 250px;
    height: 50px;
    font-size: 1.25rem;
  }

  button:hover {
    filter: brightness(2);
  }
`;
