import { Box, Title, Text, HelperText, Button, Wrapper } from "./styled";

export default function ContractType() {
  return (
    <Box>
      <Title>Escolha a modalidade:</Title>
      <Button>Cartão de Crédito</Button>
      <Text> Ou </Text>
      <Wrapper>
        <Button disabled = {true}>Crédito Consignado</Button>
        <HelperText>Em Breve</HelperText>
      </Wrapper>
    </Box>
  );
}
