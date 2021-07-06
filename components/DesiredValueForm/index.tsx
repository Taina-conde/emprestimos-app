import { Form, Input, Button, Title } from "./styled";
export default function DesiredValueForm({
  touched,
  errors,
  values,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
    <Form onSubmit={handleSubmit}>
    <Title>Valor desejado</Title>
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.desiredValue}
        type = 'text'
        name = 'desiredValue'
        placeholder="R$ 0,00"
      />
      <Button type = 'submit'>
          Calcular
      </Button>
    </Form>
  );
}
