import styled from "styled-components";

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }

  
  .circulo1 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 6px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.lilas2};
    color: ${(props) => props.theme.body};
  }

  .circulo2 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja2};
    color: ${(props) => props.theme.body};
  }

  .circulo3 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja1};
    color: ${(props) => props.theme.body};
  }
`;

export const Container = styled.div`
  margin: 2rem;
  span{
    color: ${(props) => props.theme.titulo};
    font-weight:bold;
    margin-left:10px;
  }
`;

export const Lista = styled.div`
  border: 1px solid #8047f8;
  border-radius: 8px 50px 8px 50px;
  display: grid;
  padding: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  width: 25rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Informacao = styled.text`
  margin-bottom: 1rem;
`;

export const Subtitulo = styled.text`
  width: 33rem;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.subtitulo};
  @media (max-width: 800px) {
    width: 100%;
  }
`;
