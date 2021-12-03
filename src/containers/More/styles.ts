import styled from "@emotion/styled";

export const Section = styled.section`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 740px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 500px;

      p {
        margin-bottom: 1rem;
      }

      div {
        display: flex;
        align-items: center;

        a {
          margin-left: 1rem;
        }

        a:hover {
          color: var(--blue);
        }
      }
    }
  }
  h2 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }

  button {
    margin-top: 3rem;
  }
`;
