import { Box, Title, Text, HelperText } from "./styled";
import PrimaryButton from "../shared/PrimaryButton";
export default function ContractType() {
  return (
    <Box>
      <Title>Escolha a modalidade:</Title>
      <PrimaryButton type = 'button'>
          Cartão de Crédito
      </PrimaryButton>
      <Text> Ou </Text>
      <PrimaryButton type = 'button'>
          Crédito Consignado
      </PrimaryButton>
      <HelperText>
          Em Breve
      </HelperText>
      

    </Box>
  );
}
