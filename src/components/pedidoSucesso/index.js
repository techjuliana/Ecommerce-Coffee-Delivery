import {
  Container,
  ContainerTexto,
  Lista,
  Subtitulo,
  Titulo,
  Conjunto,
} from "./styled";
import men from "./../../assets/men.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Informacao } from "../about/styled";
export default function PedidoSucesso() {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>Uhu! Pedido confirmado</Titulo>
          <Subtitulo>
            Agora é só aguardar que logo o café chegará até você
          </Subtitulo>
          <Lista>
            <Informacao>
              <FaMapMarkerAlt className="circulo1" />
              Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
              Alegre, RS
            </Informacao>
            <Informacao>
              <RiTimerFill className="circulo1" /> Previsão de entrega 20 min -
              30 min
            </Informacao>
            <Informacao>
              <MdOutlineAttachMoney className="circulo1" />
              Pagamento na entrega Cartão de Crédito
            </Informacao>
          </Lista>
        </Conjunto>
        <img src={men} alt="" />
      </ContainerTexto>
    </Container>
  );
}
