import { Formik, FormikHelpers, FormikErrors } from "formik";
import RateTable from "./RateTable";
import { Form, Button, FixedBar, Text } from "./styled";
import { useAppSelector } from "../../hooks";
import { getRateTableById, getInstallmentById } from "../../pages/api/helpers";

interface Values {
  installments: number;
  installmentValue: number;
}
interface Installment {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
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
  const solicitation = useAppSelector((state) => state.solicitation);
  const rateTable: Table | undefined =
    solicitation.rateTableId !== 0
      ? getRateTableById(solicitation.rateTableId)
      : undefined;
  const installment: Installment | undefined =
    solicitation.rateTableId !== 0
      ? getInstallmentById(solicitation.rateTableId, solicitation.installmentId)
      : undefined;
  console.log("rate table aqui", rateTable);
  console.log("solicitationn aqui", solicitation);

  return (
    <Formik
      initialValues={{
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
          {rateTables.map((table: Table) => (
            <RateTable
              key={table.id}
              id={table.id}
              name={table.name}
              installments={table.installments}
            />
          ))}
          {rateTable !== undefined && (
            <FixedBar>
              <Text>Nome: {rateTable.name} </Text>
              <Text>
                Parcelas: {installment.installments}
              </Text>
              <Text>Valor da Parcela: {solicitation.installmentValue}</Text>
              <Button type="submit">Avançar</Button>
            </FixedBar>
          )}
        </Form>
      )}
    </Formik>
  );
}
