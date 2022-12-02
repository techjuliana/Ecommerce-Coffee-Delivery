import {
  ContainerTexto,
  Lista,
  Subtitulo,
  Titulo,
  Conjunto,
  Container,
} from "./styled";

import CafesSelecionados from "../cafesSelecionados";
export default function FormPagamento() {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>Complete seu pedido</Titulo>
          <Subtitulo>formulario1</Subtitulo>
          <Lista>
          <Subtitulo>formulario2</Subtitulo>
          </Lista>
        </Conjunto>
        <CafesSelecionados/>
      </ContainerTexto>
    </Container>
  );
}

