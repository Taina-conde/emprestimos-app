import { Td, Th, Tr, TableTitle, Table } from "./styled";

export default function RateTable() {
  return (
    <Table>
      <Tr>
        <TableTitle>Tabela</TableTitle>
      </Tr>
      <Tr>
        <Th>Parcela</Th>
        <Th>Juros da Parcela</Th>
        <Th>Valor Parcela</Th>
        <Th>Valor Total</Th>
        <Th>Comissão Parceiro</Th>
      </Tr>
    </Table>
  );
}
