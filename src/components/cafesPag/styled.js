import styled from "styled-components";

export const CoffeeSale = styled.div`
  display: flex;
  flex-direction: row;
  height: 3.2rem;
`;

export const Remover = styled.button`
  height: 2.3rem;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.cinza5};
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
