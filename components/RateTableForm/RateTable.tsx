import { Td, Th, Tr, TableTitle, Table, TableHead, TableBody } from "./styled";
import { useAppSelector } from "../../hooks";

export default function RateTable() {
  const rateTables = useAppSelector((state) => state);
  console.log('ratetables', rateTables)
  return (
    <Table>
      <TableHead>
        <TableTitle>Tabela</TableTitle>
        <Tr>
          <Th>Parcela</Th>
          <Th>Juros da Parcela</Th>
          <Th>Valor Parcela</Th>
          <Th>Valor Total</Th>
          <Th>Comissão Parceiro</Th>
        </Tr>
      </TableHead>
      <TableBody>
        <Tr></Tr>
      </TableBody>
    </Table>
  );
}
