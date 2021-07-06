import Layout from "../components/Layout";
import { ErrorMessage, Formik, FormikHelpers } from "formik";
import DesiredValueForm  from '../components/DesiredValueForm';

interface Values {
  desiredValue: number;
}

export default function Home() {
  return (
    <Layout title="Simulação de taxas">
      <div>
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
          {(props) => <DesiredValueForm message = "Valor desejado" {...props}/>}
          
        </Formik>
      </div>
    </Layout>
  );
}
