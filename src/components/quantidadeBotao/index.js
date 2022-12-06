import { QuantityInputContainer } from "./styled";
import { Minus, Plus } from "phosphor-react";

export function QuantidadeBotao({ amount, addOne, removeOne }) {
  const handleAddOne = () => {
    addOne();
  };

  const handleRemoveOne = () => {
    removeOne();
  };
  return (
    <QuantityInputContainer>
      <button onClick={handleRemoveOne} title="Remover 1">
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={handleAddOne} title="Adicionar 1">
        <Plus />
      </button>
    </QuantityInputContainer>
  );
}
