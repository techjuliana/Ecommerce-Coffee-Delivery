import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem;
`;

export const CoffeeSale = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.2rem;
`;

export const CartEmptyMessage = styled.div`
  max-width: 36.8rem;
  width: 80%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.25s;
  border: double 1px transparent;
  border-image-slice: 1;
  border-radius: 10px;
  text-align: center;
`;

export const Titulo = styled.h3`
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PriceInfo = styled.div`
  height: 9.2rem;
  max-width: 36.8rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;
`;

export const PriceTag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeesList = styled.div`
  min-height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Carrinho = styled.button`
  width: 90%;
  margin: 1rem;
  align-items: center;
  color: ${(props) => props.theme.body};
  background: ${(props) => props.theme.laranja2};
`;

export const Entrega = styled.h4``;

export const Card = styled.div`
  border-radius: 8px 50px 8px 50px;
  padding: 2rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.card};
  span {
    padding: 1rem;
  }
`;
export const Remover = styled.button`
  height: 2.3rem;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.cinza5};
`;

export const CompleteOrderButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  max-width: 36.8rem;
  width: 80%;
  height: 4.6rem;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 6rem;
  }
`;
