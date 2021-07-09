import { Form, Button, Title, Wrapper, HelperText, Label } from "./styled";
import Input from "../shared/Input";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { useAppDispatch } from "../../hooks";
import { getClientByCpf, getClientById } from "../../pages/api/helpers";
import { setClientId } from "../../redux/slices/solicitation";
import { setSearchResult } from "../../redux/slices/searchResult";

interface Values {
  cpf: string;
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
interface Result {
  status: string;
  client: Client;
}

export default function ClientSearch() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          cpf: "",
        }}
        validate={(values: Values) => {
          let errors: FormikErrors<Values> = {};
          if (!values.cpf) {
            errors.cpf = "Campo obrigatório";
          } else if (values.cpf.length !== 11) {
            errors.cpf = "O CPF deve conter 11 números";
          }
          return errors;
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const { cpf } = values;
          alert("submit clicked");
          // getClientByCpf(cpf)
          const response: Client | string = getClientByCpf(cpf);

          if (typeof response !== "string") {
            const { id } = response;
            const searchResult: Result = {
              status: "cliente encontrado",
              client: { ...response },
            };
            //dispatch action to update clientId
            dispatch(setClientId(id));
            dispatch(setSearchResult(searchResult));
            console.log("searchResult cliente encontrado", searchResult);
          } else {
            const searchResult = {
              status: response,
              client: {
                id: 0,
                name: "",
                phone: "",
                cpf: "",
                bank: {
                  label: "",
                  accountTypeLabel: "",
                  accountNumber: "",
                },
              },
            };
            dispatch(setSearchResult(searchResult));
            console.log("searchResult cliente nao encontrado", searchResult);
          }
          
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
                  append
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpf}
                  border={touched.cpf && errors.cpf && "1px solid red"}
                  type="text"
                  name="cpf"
                  placeholder="CPF do cliente"
                />
              </Label>
              <Button type="submit">Buscar</Button>
            </Wrapper>
            {touched.cpf && errors.cpf && <HelperText>{errors.cpf}</HelperText>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
