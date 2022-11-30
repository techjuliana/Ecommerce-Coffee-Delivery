import { Container } from "./styled";
import men from "./../../assets/men.svg";
import {
  FaMapMarkerAlt,
  RiTimerFill,
  MdOutlineAttachMoney,
} from "react-icons/fa";
export default function PedidoSucesso({ titulo, subtitulo }) {
  return (
    <Container>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <FaMapMarkerAlt />
      <RiTimerFill />
      <MdOutlineAttachMoney />
      <img src={men} alt="pais" />
    </Container>
  );
}
