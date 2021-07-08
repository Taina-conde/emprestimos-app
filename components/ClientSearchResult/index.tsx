import {
  Wrapper,
  ClientNotFound,
  ClientBox,
  ClientName,
  ClientCpf,
} from "./styled";
import PrimaryButton from "../shared/PrimaryButton";

interface Client {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: {
    label: string;
    accountTypeLabel: string;
    accountNumber: string;
  };
}
interface OtherProps {
  result: Client | string;
}

export default function ClientSearchResult(props: OtherProps) {
  const { result } = props;
  console.log("result dentro do clientsearchresult", result);
  return (
    <ClientBox>
      {typeof result === "string" ? (
        <ClientNotFound>{result}</ClientNotFound>
      ) : (
        <Wrapper>
          <div>Cliente encontrado:</div>
          <ClientCpf>{result.cpf}</ClientCpf>
          <ClientName>{result.name}</ClientName>
          <PrimaryButton>Solicitar</PrimaryButton>
        </Wrapper>
      )}
    </ClientBox>
  );
}
