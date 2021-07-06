import { Form, Input, Button, Title, Wrapper } from "./styled";
import { FormikProps } from "formik";

interface FormValues {
  desiredValue: number;
}
interface OtherProps {
  message: string;
}
export default function DesiredValueForm(
  props: OtherProps & FormikProps<FormValues>
) {
  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Title>Valor desejado</Title>
      <Wrapper>
        <Input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.desiredValue}
          border={touched.desiredValue && errors.desiredValue && "1px solid red"}
          type="text"
          name="desiredValue"
          placeholder="R$ 0,00"
        />
        <Button type="submit">Calcular</Button>
      </Wrapper>
    </Form>
  );
}
