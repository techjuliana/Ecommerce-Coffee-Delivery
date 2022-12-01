import {
  Container,
  Card,
  Titulo,
  TituloCard,
  Tag,
  Sobre,
  Valor,
  Quantidade,
  Comprar,
  Pag,
  Grid,
  Coffee,
} from "./styled";

import tradicional from "./../../assets/coffees/tradicional.png";
import { FaShoppingCart } from "react-icons/fa";
export default function Cafes({ titulo, tag, cardTitulo, sobre }) {
  return (
    <Container>
      <Titulo>{titulo}</Titulo>
      <Grid>
        <Card>
          <Coffee src={tradicional} alt="pais" />
          <Tag>{tag}</Tag>
          <TituloCard>{cardTitulo}</TituloCard>
          <Sobre>{sobre}</Sobre>
          <Pag>
            <Valor>R$ 9,90</Valor>
            <Quantidade>quantidade</Quantidade>
            <Comprar>
              <FaShoppingCart />
            </Comprar>
          </Pag>
        </Card>
      </Grid>
    </Container>
  );
}
