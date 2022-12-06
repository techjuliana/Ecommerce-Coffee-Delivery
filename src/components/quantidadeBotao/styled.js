import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;

  input {
    text-align: center;
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    background: none;
    transition: 0.4s;
    &:disabled {
      opacity: 0.4;
    }
  }
`;
