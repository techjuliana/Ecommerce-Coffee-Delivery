import { Container, Fundo} from "./styled";
import coffee from './../../assets/coffee.png'
import fundo from './../../assets/fundo.png'
export default function About() {
  return (
    <Container>
    <Fundo src={fundo} alt="" />
    <div>
    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
    <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
    <img src={coffee} alt="" />
    </div>
   
    <div>
    <h3>Compra simples e segura</h3>
    <h3>Entrega rápida e rastreada</h3>
    <h3>Embalagem mantém o café intacto</h3>
    <h3>O café chega fresquinho até você</h3>
    </div>
    </Container>
  );
}
