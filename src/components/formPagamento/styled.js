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
    color: ${(props) => props.theme.lilas2};
    margin-right: 8px;
  }

  .laranja {
    color: ${(props) => props.theme.laranja1};
    margin-right: 8px;
  }
`;
export const Card = styled.div`
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.card};
`;

export const Container = styled.div`
  margin: 1rem;
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h3``;

export const Pagamento = styled.button`
  background: ${(props) => props.theme.cinza5};
  margin-right: 0.5rem;
  @media (max-width: 800px) {
    margin-top: 0.5rem;
  }
`;

export const TituloForm = styled.h4`
  margin-bottom: 0.5rem;
`;

export const Informacao = styled.text`
  margin-bottom: 1rem;
`;

export const Subtitulo = styled.p`
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.subtitulo};
  @media (max-width: 800px) {
    width: 100%;
  }
`;
