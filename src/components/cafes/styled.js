import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.section`
  border-radius: 8px 50px 8px 50px;
  background: ${(props) => props.theme.card};
  width: 17rem;
  height: 20rem;
  text-align: center;
`;

export const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Coffee = styled.img`
  position: relative;
  top: -1.4rem;
`;

export const Titulo = styled.h1``;

export const TituloCard = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Tag = styled.h6`
  width: 5.4rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  border-radius: 1rem;
  color: ${(props) => props.theme.laranja1};
  background: ${(props) => props.theme.laranja3};
`;

export const Sobre = styled.text`
  text-align: center;
  color: ${(props) => props.theme.cinza4};
`;

export const Valor = styled.h1`
  color: ${(props) => props.theme.text};
`;

export const Quantidade = styled.div`

`;

export const Pag = styled.div`
  margin: 1.3rem;
  display: grid;
  grid-template-columns: 95px 80px 80px;
`;

export const Comprar = styled.button`
  width: 2.5rem;
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.lilas1};
`;
