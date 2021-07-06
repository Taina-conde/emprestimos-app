import {
  Form,
  Input,
  Button,
  Title,
  Wrapper,
  HelperText,
  Label,
} from "./styled";
import { FormikProps } from "formik";

interface FormValues {
  desiredValue: number;
}

export default function DesiredValueForm(
  props:  FormikProps<FormValues>
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
  );
}
