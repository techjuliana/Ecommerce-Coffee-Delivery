import { QuantidadeBotao } from "../quantidadeBotao";
import { Remover, CoffeeSale, CoffeeInfo, Container2 } from "./styled";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

export default function CafesPag({ item }) {
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const addOne = () => {
    if (coffeeAmount < 9) {
      setCoffeeAmount((state) => state + 1);
    }
  };

  const removeOne = () => {
    if (coffeeAmount > 0) {
      setCoffeeAmount((state) => state - 1);
    }
  };
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
            amount={coffeeAmount}
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
