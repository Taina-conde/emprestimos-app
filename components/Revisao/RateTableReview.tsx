import { Th, Tr, TableTitle, Table, TableHead, TableBody } from "../shared/Table";
export default function RateTableReview(props) {
    const { name, installments } = props;
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
            <Tr key={installment.id} rateTableId={id} {...installment} >

            </Tr>
          );
        })}
      </TableBody>
    </Table>
  )
}
