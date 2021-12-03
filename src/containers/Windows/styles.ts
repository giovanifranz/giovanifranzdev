import styled from "@emotion/styled";

export const Section = styled.section`
  height: 100%;
  border: 1px solid var(--blue);
  border-radius: 0.5rem;

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
  
`;
