import styled from "styled-components";

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
  }
  .roxo {
    color: ${(props) => props.theme.body};
  }

  .laranja {
    color: ${(props) => props.theme.body};
  }

`;

export const Container = styled.div`
  margin: 1rem;
`;

export const Coffee = styled.img`
  width: 24rem;
  @media (max-width: 800px) {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 290px 290px;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h3`
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
