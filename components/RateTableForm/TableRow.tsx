import { Tr, Td } from "./styled";
import { useAppDispatch } from "../../hooks";
import { setChosenInstallment } from "../../redux/slices/solicitation";
import { useAppSelector } from "../../hooks";

interface Installment {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
  rateTableId: number;
}
interface Payload {
  rateTableId: number;
  totalLoan: number;
  installmentId: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
  installmentInterest: number;
  installmentInterestValue: number;
}
export default function TableRow(props: Installment) {
  const dispatch = useAppDispatch();
  const desiredValue = useAppSelector(
    (state) => state.solicitation.desiredValue
  );
  const {
    rateTableId,
    id,
    installments,
    installmentInterest,
    installmentValue,
    fullValue,
    comission,
  } = props;
  const installmentInterestValue: number = Number(
    ((desiredValue * installmentInterest) / 100).toFixed(2)
  );
  const totalLoan: number = Number(
    (desiredValue + installmentInterestValue).toFixed(2)
  );
  const comissionValue: number = Number(
    ((comission / 100) * desiredValue).toFixed(2)
  );
  const clickHandler = () => {
    const payload: Payload = {
      installmentId: id,
      rateTableId,
      totalLoan,
      comission,
      comissionValue,
      installmentValue,
      installmentInterest,
      installmentInterestValue,
    };
    dispatch(setChosenInstallment(payload));
    alert("clicked");
  };
  return (
    <Tr key={id} onClick={clickHandler}>
      <Td>{installments}</Td>
      <Td>{installmentInterest}%</Td>
      <Td>R$ {installmentValue}</Td>
      <Td>R$ {totalLoan}</Td>
      <Td>R$ {comissionValue}</Td>
    </Tr>
  );
}
