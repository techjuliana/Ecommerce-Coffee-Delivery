import { Container, Logo, Local, Carrinho, Conjunto, Entrega } from "./styled";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="pais" />
      </Link>

      <Conjunto>
        <Local>
          <FaMapMarkerAlt />
          <Entrega>Entrega em todo Brasil</Entrega>
        </Local>

        <Carrinho>
          <Link to="/entregaPedido">
            <FaShoppingCart />
          </Link>
        </Carrinho>
      </Conjunto>
    </Container>
  );
}
