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
  InputContainer,
  CardPag
} from "./styled";
import { IMaskInput } from "react-imask";
import { FaMapMarkerAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCreditCard2Back, BsBank } from "react-icons/bs";

import CafesSelecionados from "../cafesSelecionados";
export default function FormPagamento({handleChangePaymentType } ) {
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
              Informe o endereço onde deseja receber seu pedido
            </Subtitulo>
            <IMaskInput mask="00000-000" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <InputContainer>
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </InputContainer>
            <InputContainer>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <IMaskInput mask="aa" type="text" placeholder="UF" />
            </InputContainer>
          </Card>
          <CardPag>
            <TituloForm>
              <MdOutlineAttachMoney className="roxo" />
              Pagamento
            </TituloForm>
            <Subtitulo>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </Subtitulo>
            <Lista>
              <Pagamento>
                <BsCreditCard2Back
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Cartão de Crédito")}
                  // selected={paymentPreference === "creditCard"}
                  // onClick={() => handleSelectPaymentPreference("creditCard")}
                />
                CARTÃO DE CRÉDITO
              </Pagamento>
              <Pagamento>
                <BsBank
                  className="roxo"
                  // selected={paymentPreference === "debitCard"}
                  // onClick={() => handleSelectPaymentPreference("debitCard")}
                  type="button"
                  onClick={() => handleChangePaymentType("Cartão de Débito")}
                />
                CARTÃO DE DÉBITO
              </Pagamento>
              <Pagamento>
                <FaRegMoneyBillAlt
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Dinheiro")}
                  // selected={paymentPreference === "money"}
                  // onClick={() => handleSelectPaymentPreference("money")}
                />
                DINHEIRO
              </Pagamento>
            </Lista>
          </CardPag>
        </Conjunto>
        <CafesSelecionados />
      </ContainerTexto>
    </Container>
  );
}
