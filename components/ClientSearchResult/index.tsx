import { Wrapper, ClientNotFound, ClientBox, ClientName, ClientCpf} from "./styled";
import PrimaryButton from '../shared/PrimaryButton';
import ClientFound from "./ClientFound";
import { useAppDispatch } from "../../hooks";
import { getClientById } from "../../pages/api/helpers";

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
    <Wrapper>
      {typeof result === "string" ? (
        <ClientNotFound>{result}</ClientNotFound>
      ) : (
        <ClientBox>
          <div>Cliente encontrado:</div>
          <ClientCpf>{result.cpf}</ClientCpf>
          <ClientName>{result.name}</ClientName>
          <PrimaryButton>Solicitar</PrimaryButton>
        </ClientBox>
      )}
    </Wrapper>
  );
}
