import PedidoSucesso from "../../components/pedidoSucesso";
import { Container} from "./styled";

export default function PedidoConfirmado() {
  return (
    <Container>
    <PedidoSucesso
      titulo={"Uhu! Pedido confirmado"}
      subtitulo={"Agora é só aguardar que logo o café chegará até você"}
    />
    </Container>
  );
}
