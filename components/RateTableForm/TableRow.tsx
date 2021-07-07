import { Tr, Td } from "./styled";

interface Installment {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
}
export default function TableRow(props: Installment) {
  const {
    id,
    installments,
    installmentInterest,
    installmentValue,
    fullValue,
    comission,
  } = props;
  const clickHandler = () => {
      alert('clicked')
  };
  return (
    <Tr key={id} onClick={clickHandler}>
      <Td>{installments}</Td>
      <Td>{installmentInterest}%</Td>
      <Td>R$ {installmentValue}</Td>
      <Td>R$ {fullValue}</Td>
      <Td>R$ {comission}</Td>
    </Tr>
  );
}
