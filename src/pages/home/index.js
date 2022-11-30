import { Container} from "./styled";
import About from "./../../components/about"
import Cafes from "../../components/cafes";
export default function Home() {
  return (
    <Container>
    <About/>
    <Cafes/>
    </Container>
  );
}
