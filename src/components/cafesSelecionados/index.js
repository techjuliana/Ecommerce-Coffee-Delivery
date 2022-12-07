import {
  Carrinho,
  Container,
  Entrega,
  Titulo,
  Card,
  PriceInfo,
  PriceTag,
} from "./styled";

import { Link } from "react-router-dom";

import Dados from "../../dados";
import CafesPag from "../cafesPag";
import { useDeliveryFee } from "../../hooks/useDeliveryFee";
export default function CafesSelecionados({ valor }) {


  const price = useDeliveryFee(Dados);

  return (
    <Container>
      <Titulo>Cafes Selecionados</Titulo>
      <Card>
        {Dados?.map((item) => (
          <CafesPag item={item} key={item.id} />
        ))}
        <PriceInfo>
          <PriceTag>
            <h5>Total de itens</h5>

            <span value={price?.subTotal}> R$ {`${valor},00`}</span>
          </PriceTag>
          <PriceTag>
            <h5>Entrega valor fixo</h5>

            <span>R$ 12,00</span>
          </PriceTag>
          <PriceTag>
            <h4>Total</h4>
            <span value={price?.total}> R$ {`${valor},00`}</span>
          </PriceTag>
        </PriceInfo>
        <Carrinho>
          <Link to="/pedidoConfirmado">
            <Entrega>CONFIRMAR PEDIDO</Entrega>
          </Link>
        </Carrinho>
      </Card>
    </Container>
  );
}
