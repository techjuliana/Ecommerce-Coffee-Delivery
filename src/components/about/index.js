import {
  ContainerTexto,
  Fundo,
  Lista,
  Informacao,
  Subtitulo,
  Titulo,
  Conjunto,
  Coffee,
  Container,
} from "./styled";
import coffee from "./../../assets/coffee.png";
import fundo from "./../../assets/fundo.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { GiCardboardBoxClosed, GiCoffeeCup } from "react-icons/gi";
export default function About({
  titulo,
  subtitulo,
  info1,
  info2,
  info3,
  info4,
}) {
  return (
    <Container>
      <Fundo src={fundo} alt="" />
      <ContainerTexto>
        <Conjunto>
          <Titulo>{titulo}</Titulo>
          <Subtitulo>{subtitulo}</Subtitulo>
          <Lista>
            <Informacao>
              <FaShoppingCart className="circulo1" />
              {info1}
            </Informacao>
            <Informacao>
              <GiCardboardBoxClosed className="circulo3" />
              {info3}
            </Informacao>
            <Informacao>
              <RiTimerFill className="circulo2" />
              {info2}
            </Informacao>
            <Informacao>
              <GiCoffeeCup className="circulo4" />
              {info4}
            </Informacao>
          </Lista>
        </Conjunto>
        <Coffee src={coffee} alt="" />
      </ContainerTexto>
    </Container>
  );
}
