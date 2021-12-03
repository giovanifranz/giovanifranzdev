import styled from "@emotion/styled";

export const Section = styled.section`
  border: 1px solid var(--blue);
  border-radius: 0.5rem;
  background-color: var(--black);
  z-index: 999;
  box-shadow: var(--blue) 0.25rem 0.25rem 0.25rem;
  margin-top: 150px;

  header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  button {
    background: transparent;
    border: none;
    color: var(--blue);
  }

  button:hover {
    filter: brightness(1.2);
  }
`;
