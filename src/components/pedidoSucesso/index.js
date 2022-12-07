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
import { useState } from "react";

export default function PedidoSucesso() {
  const { order } = useState();
  const address = order?.address;

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
              Entrega em
              <span>{address?.street} {address?.number}</span>
             
            </Informacao>
            <Informacao>
              <RiTimerFill className="circulo2" /> Previsão de entrega
              <span>20 min - 30 min</span>
            </Informacao>
            <Informacao>
              <MdOutlineAttachMoney className="circulo3" />
              Pagamento na entrega
              <span>{order?.paymentType}</span>
            </Informacao>
          </Lista>
        </Conjunto>
        <img src={men} alt="" />
      </ContainerTexto>
    </Container>
  );
}
