import styled from "@emotion/styled";

export const Section = styled.section`
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  article {
    width: 900px;
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

export const ButtonVertical = styled.button`
  background-color: transparent;
  border-radius: 0.5rem;
  padding-right: 1.385rem;
  padding-left: 2rem;
  border: 1px solid var(--blue);
  color: var(--blue);
  height: 50px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  word-wrap: break-word;
  transform: rotate(270deg);


  .icon {
    margin-left: 1rem;
    font-size: 32px;
  }
`;
