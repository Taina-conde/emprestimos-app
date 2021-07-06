import { Formik, FormikHelpers, FormikErrors } from "formik";
interface Values {
  rateTableId: string;
  installments: number;
  installmentValue: number;
}
export default function RateTable() {
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
          
            <Button type="submit">Calcular</Button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
}
