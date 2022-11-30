import { Container, Entrar, Logo, Github } from "./styled";
import Ig from "./../../assets/ig.svg";
import github from "./../../assets/github.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Logo src={Ig} alt="pais" />
      <Link to="/"></Link>

      <Entrar>
        <a href="https://github.com/login">
          <Github src={github} alt="" />
          Entrar com GitHub
        </a>
      </Entrar>
    </Container>
  );
}
