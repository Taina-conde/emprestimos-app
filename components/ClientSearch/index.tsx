import {
    Form,
    Button,
    Title,
    Wrapper,
    HelperText,
    Label,
  } from "./styled";
  import Input from '../shared/Input';
  import { Formik, FormikHelpers, FormikErrors } from "formik";
  import {useAppDispatch} from "../../hooks";

  
  interface Values {
    cpf: string;
  }
  
  export default function ClientSearch() {
    const dispatch = useAppDispatch()
    return (
      <Formik
        initialValues={{
          cpf: "",
        }}
        validate={(values: Values) => {
          let errors: FormikErrors<Values> = {};
          if (values.cpf.length === 11) {
            errors.cpf =
              "O CPF deve conter 11 números";
          }
          return errors;
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            const { cpf } = values;
            // dispatch action 
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
            <Title>Busque o Cliente</Title>
            <Wrapper>
              <Label>
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpf}
                  border={
                    touched.cpf && errors.cpf && "1px solid red"
                  }
                  type="text"
                  name="cpf"
                  placeholder="CPF do cliente"
                />
                {touched.cpf && errors.cpf && (
                  <HelperText>{errors.cpf}</HelperText>
                )}
              </Label>
              <Button type="submit">Calcular</Button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    );
  }
  