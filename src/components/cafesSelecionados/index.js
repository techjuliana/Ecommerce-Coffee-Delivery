import { Carrinho, Container, Entrega, Titulo, Card, Remover, CoffeeSale,CoffeeInfo, Container2, PriceInfo, PriceTag } from "./styled";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { QuantidadeBotao } from "../quantidadeBotao";
import cafe from "./../../assets/coffees/americano.png"
export default function CafesSelecionados({ valor, coffeeAmount, addOne, removeOne}) {
  
  return (
    <Container>
      <Titulo>Cafes Selecionados</Titulo>
      <Card>
      <Container2>
      <img src={cafe} alt="" />
      <div>
        <CoffeeInfo>
          <span>Cafe</span>
          <span>
            R$<span>{`${valor},00`}</span>
          </span>
        </CoffeeInfo>
        <CoffeeSale>
        <QuantidadeBotao
             amount={coffeeAmount}
             addOne={addOne}
             removeOne={removeOne}
          />
          <Remover>
            <FaRegTrashAlt className="roxo" 
              onClick={'handleRemoveCoffeeFromCart'}
            />
            REMOVER
          </Remover>
        </CoffeeSale>
        </div>
        </Container2>
        <PriceInfo>
          <PriceTag>
            <h5>Total de itens</h5>
            <span>
              R$<span>{`${valor},00`}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <h5>Entrega valor fixo</h5>
            <span>
              R$<span>{`${valor},00`}</span>
            </span>
          </PriceTag>
          <PriceTag>
            <h4>Total</h4>
            <span>
              R$<span>{`${valor},00`}</span>
            </span>
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
