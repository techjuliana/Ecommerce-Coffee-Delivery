import { Container, Logo, Local, Carrinho } from "./styled";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="pais" />
      </Link>

      <Local>
        <FaMapMarkerAlt />
        Local
      </Local>

      <Carrinho>
        <Link to="/entregaPedido">
          <FaShoppingCart />
        </Link>
      </Carrinho>
    </Container>
  );
}
