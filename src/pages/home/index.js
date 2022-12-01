import { Container } from "./styled";
import About from "./../../components/about";
import Cafes from "../../components/cafes";
export default function Home() {
  return (
    <Container>
      <About
        titulo={"Encontre o café perfeito para qualquer hora do dia"}
        subtitulo={
          "Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
        }
        info1={"Compra simples e segura"}
        info2={"Entrega rápida e rastreada"}
        info3={"Embalagem mantém o café intacto"}
        info4={"O café chega fresquinho até você"}
      />
      <Cafes />
    </Container>
  );
}
