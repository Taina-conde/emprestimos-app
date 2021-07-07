import { Td, Th, Tr, TableTitle, Table, TableHead, TableBody } from "./styled";
import TableRow  from './TableRow';


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
            <TableRow key = {installment.id} rateTableId = {id} {...installment}/>
          );
        })}
      </TableBody>
    </Table>
  );
}
