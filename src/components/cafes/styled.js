import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.section`
  border-radius: 8px 50px 8px 50px;
  background: ${(props) => props.theme.card};
  width: 17rem;
  height: 22rem;
  text-align: center;
  margin: 1.4rem;
`;

export const Coffee = styled.img`
  position: relative;
  top: -1.4rem;
`;

export const TituloCard = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Tag = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  h6 {
    padding: 5px 10px;
    border-radius: 15px;
    font-weight: bold;
    margin: 0.5rem;
    color: ${(props) => props.theme.laranja1};
    background: ${(props) => props.theme.laranja3};
  }
`;

export const Sobre = styled.text`
  text-align: center;
  color: ${(props) => props.theme.cinza4};
`;

export const Valor = styled.h1`
  color: ${(props) => props.theme.text};
`;

export const Pag = styled.div`
  margin: 1.3rem;
  display: grid;
  grid-template-columns: 95px 80px 80px;
`;

export const Comprar = styled.button`
  margin-left: 1rem;
  width: 2.6rem;
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.lilas1};
`;
