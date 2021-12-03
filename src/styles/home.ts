import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
`;

export const Content = styled.section`
  padding: 400px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section + section {
    margin-top: 20rem;
  }
`;
