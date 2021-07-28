import { Th, Tr, TableTitle, Table, TableHead, TableBody } from "../shared/Table";

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
export default function RateTableReview(props: RateTable) {
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
