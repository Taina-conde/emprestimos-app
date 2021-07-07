import { Td, Th, Tr, TableTitle, Table, TableHead, TableBody } from "./styled";
import { useAppSelector } from "../../hooks";

interface RateTable {
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
interface Installment {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
}

export default function RateTable(props: RateTable) {
  const { id, name, installments } = props;
  const desiredValue = useAppSelector(state => state.solicitation.desiredValue)
  console.log("installments", installments);
  

  return (
    <Table>
        <TableTitle>{name}</TableTitle>
      <TableHead>
        
        <Tr>
          <Th>Parcela</Th>
          <Th>Juros da Parcela</Th>
          <Th>Valor Parcela</Th>
          <Th>Valor Total</Th>
          <Th>Comissão Parceiro</Th>
        </Tr>
      </TableHead>
      <TableBody>
        {installments.map((installment: Installment) => {
            return (
          <Tr key={installment.id}>
            <Td>{installment.installments}</Td>
            <Td>{installment.installmentInterest}%</Td>
            <Td>R$ {installment.installmentValue}</Td>
            <Td>R$ {installment.fullValue}</Td>
            <Td>R$ {installment.comission}</Td>
          </Tr>
        )})}
      </TableBody>
    </Table>
  );
}
