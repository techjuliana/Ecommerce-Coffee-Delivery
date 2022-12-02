import { Container } from "./styled";
import men from "./../../assets/men.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
export default function PedidoSucesso() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <FaMapMarkerAlt />
      <RiTimerFill />
      <MdOutlineAttachMoney />
      <img src={men} alt="" />
    </Container>
  );
}
