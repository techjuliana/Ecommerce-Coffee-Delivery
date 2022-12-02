import { Carrinho, Container, Entrega, Titulo} from "./styled";
import {FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CafesSelecionados() {
  return (
    <Container>
     <FaRegTrashAlt />
     <Titulo>Cafes Selecionados</Titulo>
        <div>
           <text>form3</text>
           <Carrinho>
           <Link to="/pedidoConfirmado">
           <Entrega>CONFIRMAR PEDIDO</Entrega>
          </Link>
        </Carrinho>
          </div>
    </Container>
  );
}
