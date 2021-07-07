import { Formik, FormikHelpers, FormikErrors } from "formik";
import RateTable from "./RateTable";
import { Form, Button, FixedBar, Text } from "./styled";
import { useAppSelector } from "../../hooks";

interface Values {
  rateTableId: string;
  installments: number;
  installmentValue: number;
}

interface Table {
  id: number;
    name: string;
    installments: {
        id: number;
        installments: number;
        installmentInterest: number;
        installmentValue: number;
        fullValue: number;
        comission: number;
    }[];
}

export default function RateTableForm() {
  const rateTables = useAppSelector((state) => state.rateTables);
  return (
    <Formik
      initialValues={{
        rateTableId: "",
        installments: 0,
        installmentValue: 0,
      }}
      validate={(values: Values) => {
        let errors: FormikErrors<Values> = {};

        return errors;
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
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
          {rateTables.map((table: Table) => (<RateTable key = {table.id} id = {table.id}/>) )}
          <FixedBar>
            <Text>Nome: </Text>
            <Text>Parcelas: </Text>
            <Text>Valor da Parcela: </Text>
            <Button type="submit">Avançar</Button>
          </FixedBar>
        </Form>
      )}
    </Formik>
  );
}
