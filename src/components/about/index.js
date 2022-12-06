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
  Titulo2,
} from "./styled";
import coffee from "./../../assets/coffee.png";
import fundo from "./../../assets/fundo.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { GiCardboardBoxClosed, GiCoffeeCup } from "react-icons/gi";
export default function About() {
  return (
    <Container>
      <Fundo src={fundo} alt="" />
      <ContainerTexto>
        <Conjunto>
          <Titulo>Encontre o café perfeito para qualquer hora do dia</Titulo>
          <Subtitulo>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitulo>
          <Lista>
            <Informacao>
              <FaShoppingCart className="circulo1" />
              Compra simples e segura
            </Informacao>
            <Informacao>
              <GiCardboardBoxClosed className="circulo3" />
              Embalagem mantém o café intacto
            </Informacao>
            <Informacao>
              <RiTimerFill className="circulo2" />
              Entrega rápida e rastreada
            </Informacao>
            <Informacao>
              <GiCoffeeCup className="circulo4" />O café chega fresquinho até
              você
            </Informacao>
          </Lista>
        </Conjunto>
        <Coffee src={coffee} alt="" />
      </ContainerTexto>
      <Titulo2>Nossos cafés</Titulo2>
    </Container>
  );
}
