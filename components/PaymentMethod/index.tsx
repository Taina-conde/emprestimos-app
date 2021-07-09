import { Box, Title, Text, HelperText, Button, Wrapper } from "./styled";
import Link from "next/link";

export default function PaymentMethod() {
  
  return (
    <Box>
      <Title>Escolha a modalidade:</Title>
      <Link href="/revisao">
        <Button type="button">
          Cartão de Crédito
        </Button>
      </Link>

      <Text> Ou </Text>
      <Wrapper>
        <Button disabled={true}>Crédito Consignado</Button>
        <HelperText>Em Breve</HelperText>
      </Wrapper>
    </Box>
  );
}
