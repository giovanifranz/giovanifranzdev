import styled from "@emotion/styled";

export const Section = styled.section`
  width: 720px;
  z-index: 0;

  article {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 480px;

      p {
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
  }
  h2 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
`;
