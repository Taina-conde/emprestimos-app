import {
  Form,
  Row,
  Col,
  Button,
  Title,
  Wrapper,
  HelperText,
  Label,
  CardInput,
  Text,
  CardPicturesInput,
} from "./styled";

import { Formik, FormikHelpers, FormikErrors } from "formik";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface Values {
  name: string;
  cardNumber: string;
  expirationDate: string;
  cvc: string;
}
interface Client {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}

export default function CardInfoForm() {
  const dispatch = useAppDispatch();
  const client: Client = useAppSelector((state) => state.searchResult.client);
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          cardNumber: "",
          expirationDate: "",
          cvc: "",
        }}
        validate={(values: Values) => {
          let errors: FormikErrors<Values> = {};

          return errors;
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          alert("click");
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
                <Title>Insira os dados do Cartão:</Title>
                <Wrapper>
                  <Label>
                    <CardInput
                      append
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      border={touched.name && errors.name && "1px solid red"}
                      type="text"
                      name="name"
                      placeholder={client.name}
                    />
                  </Label>
                  {touched.name && errors.name && (
                    <HelperText>{errors.name}</HelperText>
                  )}
                </Wrapper>
                <Wrapper>
                  <Label>
                    <CardInput
                      append
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cardNumber}
                      border={
                        touched.cardNumber &&
                        errors.cardNumber &&
                        "1px solid red"
                      }
                      type="text"
                      name="cardNumber"
                      placeholder="000000000000"
                    />
                  </Label>
                  {touched.cardNumber && errors.cardNumber && (
                    <HelperText>{errors.cardNumber}</HelperText>
                  )}
                </Wrapper>
                <Wrapper>
                  <Label>
                    <CardInput
                      append
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expirationDate}
                      border={
                        touched.expirationDate &&
                        errors.expirationDate &&
                        "1px solid red"
                      }
                      type="text"
                      name="expirationDate"
                      placeholder="Data de validade"
                    />
                  </Label>
                  {touched.expirationDate && errors.expirationDate && (
                    <HelperText>{errors.expirationDate}</HelperText>
                  )}
                </Wrapper>
                <Wrapper>
                  <Label>
                    <CardInput
                      append
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.cvc}
                      border={touched.cvc && errors.cvc && "1px solid red"}
                      type="text"
                      name="cvc"
                      placeholder="CVC"
                    />
                  </Label>
                  {touched.cvc && errors.cvc && (
                    <HelperText>{errors.cvc}</HelperText>
                  )}
                </Wrapper>
              </Col>
              <Col>
                <Title>Faça o upload dos anexos do cartão:</Title>
                
                  <CardPicturesInput>
                    Cartão de Crédito (frente)
                  </CardPicturesInput>
                  <CardPicturesInput>
                    Cartão de Crédito (verso)
                  </CardPicturesInput>
                  <CardPicturesInput>
                    Selfie com Cartão de Crédito
                  </CardPicturesInput>
                
                <Text>
                  Atenção: As fotos devem estar legíveis, com todas as
                  informações visíveis do cartão.
                </Text>
              </Col>
            </Row>
            <Row>
              <Button type="submit">Continuar</Button>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}
