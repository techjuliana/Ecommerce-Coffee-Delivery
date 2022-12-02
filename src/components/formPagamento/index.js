import {
  ContainerTexto,
  Lista,
  Subtitulo,
  Titulo,
  Conjunto,
  Container,
  Card,
  TituloForm,
  Pagamento,
} from "./styled";
import {
  FaMapMarkerAlt,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCreditCard2Back, BsBank } from "react-icons/bs";

import CafesSelecionados from "../cafesSelecionados";
export default function FormPagamento() {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>Complete seu pedido</Titulo>
          <Card>
            <TituloForm>
              <FaMapMarkerAlt className="laranja" />
              Endereço de Entrega
            </TituloForm>
            <Subtitulo>
              {" "}
              Informe o endereço onde deseja receber seu pedido
            </Subtitulo>
          </Card>
          <Card>
            <TituloForm>
              <MdOutlineAttachMoney className="roxo" />
              Pagamento
            </TituloForm>
            <Subtitulo>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitulo>
            <Lista>
              <Pagamento>
                <BsCreditCard2Back className="roxo" />
                CARTÃO DE CRÉDITO
              </Pagamento>
              <Pagamento>
                <BsBank className="roxo" />
                CARTÃO DE DÉBITO
              </Pagamento>
              <Pagamento>
                <FaRegMoneyBillAlt className="roxo" />
                DINHEIRO
              </Pagamento>
            </Lista>
          </Card>
        </Conjunto>
        <CafesSelecionados />
      </ContainerTexto>
    </Container>
  );
}
