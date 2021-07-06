import Layout from "../components/Layout";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  desiredValue: number;
}

export default function Home() {
  return (
    <Layout title="Simulação de taxas">
      <div>
        <h1>Valor Desejado</h1>
        <Formik
          initialValues={{
            desiredValue: 0,
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <Field id="desiredValue" name="desiredValue" placeholder="R$ 0,00" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Layout>
  );
}
