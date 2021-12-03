import styled from "@emotion/styled";

export const ButtonComponent = styled.button`
  background-color: transparent;
  border-radius: 0.5rem;
  min-width: 220px;
  border: 1px solid var(--blue);
  color: var(--blue);
  height: 50px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    margin-left: 1rem;
  }
`;
