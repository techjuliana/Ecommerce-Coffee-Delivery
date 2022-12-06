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
// import { OrdersContext } from '../../providers/OrdersProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';
export default function PedidoSucesso() {
  const { orders } = useContext();
  const lastPosition = orders.length - 1;

  toast.success('Pedido completado com sucesso!');
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
              Entrega em{" "}
              <span>{`${orders[lastPosition].road}, ${orders[lastPosition].number}`}</span>{" "}
              <span>{`${orders[lastPosition].district} - ${orders[lastPosition].city}, ${orders[lastPosition].estate}`}</span>
            </Informacao>
            <Informacao>
              <RiTimerFill className="circulo2" /> Previsão de entrega
              <span>20 min - 30 min</span>
            </Informacao>
            <Informacao>
              <MdOutlineAttachMoney className="circulo3" />
              Pagamento na entrega
              <span>
                {/* {getPaymentPreference(orders[lastPosition].paymentPreference)} */}
              </span>
            </Informacao>
          </Lista>
        </Conjunto>
        <img src={men} alt="" />
      </ContainerTexto>
    </Container>
  );
}
