import styled from "@emotion/styled";

export const Aside = styled.aside`
  height: 100vh;
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-right: 1px solid var(--blue);
  background-color: var(--black);
  z-index: 999;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;

  a {
    margin-bottom: 2rem;
    color: var(--white);
  }

  div {
    background-color: var(--white);
    height: 120px;
    width: 1px;
  }
`;
