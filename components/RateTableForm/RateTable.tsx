import { Td, Th, Tr, TableTitle, Table, TableHead, TableBody } from "./styled";
import { useAppSelector } from "../../hooks";

interface RateTable {
  id: number;
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
  const { id } = props;
  const rateTable = useAppSelector((state) => state.rateTables[id]);
  console.log(rateTable)
  const { installments, name } = rateTable;
  console.log('installments', installments)

  return (
    <Table>
      <TableHead>
        <TableTitle>{name}</TableTitle>
        <Tr>
          <Th>Parcela</Th>
          <Th>Juros da Parcela</Th>
          <Th>Valor Parcela</Th>
          <Th>Valor Total</Th>
          <Th>Comissão Parceiro</Th>
        </Tr>
      </TableHead>
      <TableBody>
        
      </TableBody>
    </Table>
  );
}
