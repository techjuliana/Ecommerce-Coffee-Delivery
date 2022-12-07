import { QuantidadeBotao } from "../quantidadeBotao";
import { Remover, CoffeeSale, CoffeeInfo, Container2 } from "./styled";
import { FaRegTrashAlt } from "react-icons/fa";
export default function CafesPag({ item, coffeeAmount, addOne, removeOne }) {
  return (
    <Container2>
      <img src={item.srcImg} alt="" />
      <div>
        <CoffeeInfo>
          <span>{item.title}</span>
          <span>R${item.price}</span>
        </CoffeeInfo>
        <CoffeeSale>
          <QuantidadeBotao
            amount={item.coffeeAmount}
            addOne={addOne}
            removeOne={removeOne}
          />
          <Remover>
            <FaRegTrashAlt
              className="roxo"
              onClick={"handleRemoveCoffeeFromCart"}
            />
            REMOVER
          </Remover>
        </CoffeeSale>
      </div>
    </Container2>
  );
}
