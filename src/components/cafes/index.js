import {
  Container,
  Card,
  TituloCard,
  Tag,
  Sobre,
  Valor,
  Comprar,
  Pag,
  Coffee,
} from "./styled";

import { FaShoppingCart } from "react-icons/fa";
import { QuantidadeBotao } from "../quantidadeBotao";
import { useState } from "react";
export default function Cafes({ img, tag, cardTitulo, sobre, valor}) {
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const isCoffeeSelected = coffeeAmount > 0;
  const buttonAddToCartIsDisabled = !isCoffeeSelected;

  const handleAddToCart = () => {
    // addCoffeeToCart(coffeeAmount);
  };

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
    <Container>
      <Card>
        <Coffee src={img} alt="pais" />
        <Tag>{tag && tag.map((tag) => <h6 key={tag}>{tag}</h6>)}</Tag>
        <TituloCard>{cardTitulo}</TituloCard>
        <Sobre>{sobre}</Sobre>
        <Pag>
          <Valor>R${valor}</Valor>
          <QuantidadeBotao 
             amount={coffeeAmount}
             addOne={addOne}
             removeOne={removeOne}
          />
          <Comprar 
          onClick={handleAddToCart}
          disabled={buttonAddToCartIsDisabled}
          title={
            buttonAddToCartIsDisabled
              ? 'Selecione uma quantidade para adicionar ao carrinho'
              : 'Adicionar ao carrinho'
          }
          >
           
            <FaShoppingCart />
          </Comprar>
        </Pag>
      </Card>
    </Container>
  );
}
