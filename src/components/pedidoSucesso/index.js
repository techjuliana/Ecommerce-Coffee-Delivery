import { Container } from "./styled";
import men from "./../../assets/men.svg";
import {
  FaMapMarkerAlt,

} from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
export default function PedidoSucesso({ titulo, subtitulo }) {
  return (
    <Container>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <FaMapMarkerAlt />
      <RiTimerFill />
      <MdOutlineAttachMoney />
      <img src={men} alt="" />
    </Container>
  );
}
