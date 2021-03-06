import styled from "@emotion/styled";

export const Aside = styled.aside`
  height: 100vh;
  width: 12rem;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-right: 1px solid var(--blue);
  box-shadow: 1px 1px 1px var(--blue);
  background-color: var(--black);
  z-index: 999;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 35%;

  div {
    margin-bottom: 2rem;
  }

  a:hover {
    color: var(--blue);
  }

  #line {
    background-color: var(--white);
    height: 100%;
    width: 1px;
    margin-bottom: 0;
  }
`;
