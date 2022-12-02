import { Carrinho, Container, Entrega, Titulo, Card, Remover} from "./styled";
import {FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function CafesSelecionados() {
  return (
    <Container>
     
     <Titulo>Cafes Selecionados</Titulo>
        <Card>
        <div>
           <text>nome cafe </text>
           <text>R$</text>
           </div>
           <div>
           <text>quantidade</text>
           <Remover>
           <FaRegTrashAlt className="roxo"/>
          REMOVER
           </Remover>
           </div>
           <div className="card">
           <div>
           <h6>Total de itens</h6>
           <h6>R$</h6>
           </div>
            <div>
            <h6>Entrega valor fixo</h6>
            <h6>R$</h6>
            </div>
            <div>
              <h6>Total</h6>
              <h6>R$</h6>
            </div>
           </div>
           <Carrinho>
           <Link to="/pedidoConfirmado">
           <Entrega>CONFIRMAR PEDIDO</Entrega>
          </Link>
        </Carrinho>
          </Card>
    </Container>
  );
}
