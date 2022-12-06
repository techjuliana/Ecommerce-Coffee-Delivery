import { Container, Grid } from "./styled";
import About from "./../../components/about";
import Cafes from "../../components/cafes";
import Dados from "../../dados";
export default function Home() {
  return (
    <Container>
      <About />
      <Grid>
        {Dados?.map((item, index) => (
          <div key={index}>
            <Cafes
              img={item.srcImg}
              tag={item.tags}
              valor={item.price}
              cardTitulo={item.title}
              sobre={item.description}
            />
          </div>
        ))}
      </Grid>
    </Container>
  );
}
