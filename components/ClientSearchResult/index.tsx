import { Wrapper, ClientNotFound } from "./styled";
import  ClientFound  from "./ClientFound";
import { useAppDispatch } from "../../hooks";
import { getClientById } from "../../pages/api/helpers";

interface OtherProps {
  clientId: number;
}

export default function ClientSearchResult(props: OtherProps) {
  const result = getClientById(props.clientId);
  console.log('result', result)
  return (
    <Wrapper>
      {typeof result === "string" ? (
        <ClientNotFound>{result}</ClientNotFound>
      ) : (
        <ClientFound {...result} />
      )}
    </Wrapper>
  );
}
