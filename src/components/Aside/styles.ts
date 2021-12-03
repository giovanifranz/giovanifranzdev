import styled from "@emotion/styled";

export const Aside = styled.aside`
  height: 100vh;
  width: 48px;
  margin-left: 4rem;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;

  .icon {
      margin-bottom: 2rem;
  }

  div {
      background-color: var(--white);
      height: 120px;
      width:1px
  }
`;
