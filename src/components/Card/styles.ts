import styled from "@emotion/styled";

export const Box = styled.div`
  border: 1px solid var(--blue);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 1.25rem;
 

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  div {
    display: flex;
    flex-wrap: wrap;

    span {
      padding: 0.4rem;
      margin: 0.3rem;
      border: 1px solid var(--blue);
      border-radius: 0.5rem;
    }
  }
`;
