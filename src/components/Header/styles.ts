import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100%;
  height: 150px;
  padding: 3rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  box-shadow: 0px 2px 1px var(--blue);
  position: fixed;

  z-index: 999;
  background-color: var(--black);
`;

export const Nav = styled.nav`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--primary-lightest);
    text-decoration: none;
    font-size: 1.25rem;
  }

  a:hover {
    text-decoration: underline;
  }
`;
