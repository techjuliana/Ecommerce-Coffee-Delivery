import styled from "styled-components";

export const Container = styled.div``;

export const Titulo = styled.h3`
  width: 25rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Carrinho = styled.button`
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.laranja2};
`;

export const Entrega = styled.text`
  margin-left: 0.5rem;
  font-weight: bold;
`;