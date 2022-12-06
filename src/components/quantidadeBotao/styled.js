import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }

  button {
    width: 0.8rem;
    height: 0.875rem;
    border: none;
    background: none;
    transition: 0.4s;
    &:disabled {
      opacity: 0.4;
    }
  }
`;
