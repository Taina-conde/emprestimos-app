import RateTable from "./RateTable";
import { Wrapper, Button, FixedBar, Text } from "./styled";
import { useAppSelector } from "../../hooks";
import { getRateTableById, getInstallmentById } from "../../pages/api/helpers";

interface Installment {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
}

interface Table {
  id: number;
  name: string;
  installments: {
    id: number;
    installments: number;
    installmentInterest: number;
    installmentValue: number;
    fullValue: number;
    comission: number;
  }[];
}

export default function RateTableGroup() {
  const rateTables = useAppSelector((state) => state.rateTables);
  const solicitation = useAppSelector((state) => state.solicitation);
  const rateTable: Table | undefined =
    solicitation.rateTableId !== 0
      ? getRateTableById(solicitation.rateTableId)
      : undefined;
  const installment: Installment | undefined =
    solicitation.rateTableId !== 0
      ? getInstallmentById(solicitation.rateTableId, solicitation.installmentId)
      : undefined;

  return (
    
        <Wrapper>
          {rateTables.map((table: Table) => (
            <RateTable
              key={table.id}
              id={table.id}
              name={table.name}
              installments={table.installments}
            />
          ))}
          {rateTable !== undefined && (
            <FixedBar>
              <Text>Nome: {rateTable.name} </Text>
              <Text>
                Parcelas: {installment.installments}
              </Text>
              <Text>Valor da Parcela: {solicitation.installmentValue}</Text>
              <Button type="button">Avançar</Button>
            </FixedBar>
          )}
        </Wrapper>
      
   
  );
}
