import Layout from "../components/Layout";
import { ErrorMessage, Formik, FormikHelpers, FormikErrors } from "formik";
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
          validate ={
            (values : Values) => {
              let errors: FormikErrors<Values> = {};
              if(values.desiredValue < 300 || values.desiredValue > 10000)  {
                errors.desiredValue = "O valor do empréstimo deve ser maior que R$ 300,00 e menor que R$ 10.000,00"
              }
              return errors;
            }
          }
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
