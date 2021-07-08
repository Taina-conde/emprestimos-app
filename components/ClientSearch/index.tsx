import {
  Form,
  Button,
  Title,
  Wrapper,
  HelperText,
  Label,
} from "./styled";
import Input from "../shared/Input";
import { Formik, FormikHelpers, FormikErrors } from "formik";
import { useAppDispatch } from "../../hooks";
import { getClientByCpf } from "../../pages/api/helpers";
import { setClientId } from '../../redux/slices/solicitation';

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

export default function ClientSearch() {
  const dispatch = useAppDispatch();
  let searchResult: Client | string;
  let client: Client = {
    id: 0,
    name: "",
    phone: "",
    cpf: "",
    bank: {
      label: "",
      accountTypeLabel: "",
      accountNumber: "",
    },
  };
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
          searchResult = getClientByCpf(cpf);
          if (typeof searchResult !== 'string') {
            const { id } = searchResult;
            //dispatch action to update clientId
            dispatch(setClientId(id))
          }
          console.log('searchResult', searchResult)
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
