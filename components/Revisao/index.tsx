import { Form, Row, Col, Button, HeaderItem, Text, ItemValue, ToggleBtn, Switch } from "./styled";
import checkMark from "../../assets/icons/ionicons-checkmark.svg";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Link from "next/link";
import { getRateTableById, getInstallmentById } from "../../pages/api/helpers";
import Image from "next/image";
import RateTable from "../RateTableGroup/RateTable";

interface Values {
  tabela: string;
  parcelas: number;
}

export default function CardInfoForm() {
  const solicitation = useAppSelector((state) => state.solicitation);
  const rateTable = getRateTableById(solicitation.rateTableId);
  const installment = getInstallmentById(
    solicitation.rateTableId,
    solicitation.installmentId
  );
  console.log(rateTable);
  const dispatch = useAppDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          tabela: "",
          parcelas: 0,
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
                <Button>Automático</Button>
                <Button>Manual</Button>
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
              "rate table"
            }
          </Form>
        )}
      </Formik>
    </div>
  );
}
