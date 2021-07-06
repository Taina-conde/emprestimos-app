import {
  Form,
  Input,
  Button,
  Title,
  Wrapper,
  HelperText,
  Label,
} from "./styled";
import { Formik, FormikHelpers, FormikErrors } from "formik";

interface Values {
  desiredValue: number;
}

export default function DesiredValueForm() {
  return (
    <Formik
      initialValues={{
        desiredValue: 0,
      }}
      validate={(values: Values) => {
        let errors: FormikErrors<Values> = {};
        if (values.desiredValue < 300 || values.desiredValue > 10000) {
          errors.desiredValue =
            "O valor do empréstimo deve ser maior que R$ 300,00 e menor que R$ 10.000,00";
        }
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
          <Title>Valor desejado</Title>
          <Wrapper>
            <Label>
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desiredValue}
                border={
                  touched.desiredValue && errors.desiredValue && "1px solid red"
                }
                type="text"
                name="desiredValue"
                placeholder="R$ 0,00"
              />
              {touched.desiredValue && errors.desiredValue && (
                <HelperText>{errors.desiredValue}</HelperText>
              )}
            </Label>
            <Button type="submit">Calcular</Button>
          </Wrapper>
        </Form>
      )}
    </Formik>
  );
}
