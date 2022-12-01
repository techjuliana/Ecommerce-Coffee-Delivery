import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.section`
  border-radius: 8px 50px 8px 50px;
  background: ${(props) => props.theme.card};
  width: 17rem;
  height: 22rem;
`;

export const Grid = styled.div`
box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;


export const Coffee = styled.img`
z-index:3;
`;

export const Titulo = styled.h1``;

export const TituloCard = styled.h3``;

export const Tag = styled.h6`
  width: 5.4rem;
  padding: 0.5rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.laranja1};
  background: ${(props) => props.theme.laranja3};
`;

export const Sobre = styled.text`
 color: ${(props) => props.theme.cinza4};`;

export const Valor = styled.h1`
 color: ${(props) => props.theme.text};
`;

export const Quantidade = styled.div``;

export const Pag = styled.div`
  display: grid;
  grid-template-columns: 95px 80px 80px;
`;

export const Comprar = styled.button`
width:2.5rem;
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.lilas1};
`;
