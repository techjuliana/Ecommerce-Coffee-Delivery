import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
`;

export const Titulo = styled.h3`
  /* width: 25rem; */
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Carrinho = styled.button`
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.laranja2};
`;

export const Entrega = styled.h4``;

export const Card = styled.div`
  border-radius: 8px 50px 8px 50px;
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.card};
`;
export const Remover = styled.button`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.cinza5};
`;
