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
interface Result {
    status: string;
    client: Client;
  }
interface OtherProps {
  result: Result;
}

export default function ClientSearchResult(props: OtherProps) {
  const { result } = props;
  console.log("result dentro do clientsearchresult", result);
  return (
    <ClientBox>
      {result.status === "cliente encontrado" ? (
        <Wrapper>
          <div>Cliente encontrado:</div>
          <ClientCpf>{result.client.cpf}</ClientCpf>
          <ClientName>{result.client.name}</ClientName>
          <PrimaryButton>Solicitar</PrimaryButton>
        </Wrapper>
      ) : (
        <ClientNotFound>{result.status}</ClientNotFound>
      )}
    </ClientBox>
  );
}
