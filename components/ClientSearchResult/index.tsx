import {
  Wrapper,
  ClientNotFound,
  ClientBox,
  ClientName,
  ClientCpf,
} from "./styled";
import PrimaryButton from "../shared/PrimaryButton";
import Link from "next/link";

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
          <Link href = "/dadosCartao">
          <PrimaryButton type = "button">Solicitar</PrimaryButton>
          </Link>

          
        </Wrapper>
      ) : (
        <ClientNotFound>{result.status}</ClientNotFound>
      )}
    </ClientBox>
  );
}
