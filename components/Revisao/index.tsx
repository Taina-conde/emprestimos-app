import { Form, Row, Col, Button, HeaderItem, Text, ItemValue, Slider } from "./styled";
import checkMark from "../../assets/icons/ionicons-checkmark.svg";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Link from "next/link";
import { getRateTableById, getInstallmentById } from "../../utils/api/helpers";
import Image from "next/image";
import RateTableReview from "./RateTableReview";
import NotFound from "../shared/NotFound";

interface Values {
  tabela: string;
  parcelas: number;
  contractType: string;
}

export default function CardInfoForm() {
  const solicitation = useAppSelector((state) => state.solicitation);
  const dispatch = useAppDispatch();
  if (solicitation.clientId === 0) {
    return <NotFound/>
  }
  const rateTable = getRateTableById(solicitation.rateTableId);
  const installment = getInstallmentById(
    solicitation.rateTableId,
    solicitation.installmentId
  );
  console.log(rateTable);

  
  
  return (
    <div>
      <Formik
        initialValues={{
          tabela: "",
          parcelas: 0,
          contractType: "manual",

        }}
        validate={(values: Values) => {
          let errors: FormikErrors<Values> = {};

          return errors;
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          touched,
          errors,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <HeaderItem>
                  Tabela:<ItemValue>{rateTable.name}</ItemValue>
                </HeaderItem>
                <HeaderItem green>
                  Valor desejado:
                  <ItemValue>R$ {solicitation.desiredValue}</ItemValue>
                </HeaderItem>
                <HeaderItem>
                  Parcelas: <ItemValue>{installment.installments}</ItemValue>
                </HeaderItem>
              </Col>
              <Col>
                <HeaderItem green>
                  Valor total do empréstimo:
                  <ItemValue>R$ {solicitation.totalLoan}</ItemValue>
                </HeaderItem>
                <HeaderItem>
                  Valor da parcela:
                  <ItemValue>R$ {solicitation.installmentValue}</ItemValue>
                </HeaderItem>
              </Col>
            </Row>
            <Row>
              <Text> Escolha o tipo de contrato: </Text>
            </Row>
            <Row>
              <Col>
              <Slider>
                <input id="automatico" type="radio" name="contractType" value = "automatico" />
                <label htmlFor= "automatico">Automático</label>
                <input id="manual" type="radio" name="contractType" value = "manual" />
                <label htmlFor= "manual">Manual</label>
              </Slider>
              </Col>
              <Col>
                <Link href="/confirmacao">
                  <Button type="submit">
                    <Image src={checkMark} alt="checkmarkIcon" /> Concluir
                  </Button>
                </Link>
              </Col>
            </Row>
            {rateTable  && 
              <RateTableReview id = {rateTable.id} name = {rateTable.name} installments= {rateTable.installments}/>
            }
          </Form>
        )}
      </Formik>
    </div>
  );
}
