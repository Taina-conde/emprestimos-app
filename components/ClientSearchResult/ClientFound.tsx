import { ClientBox, ClientCpf, ClientName } from "./styled";
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
export default function ClientFound(props: Client) {
  const { id, name, phone, cpf, bank } = props;

  return (
    <ClientBox>
      <div>Cliente encontrado:</div>
      <ClientCpf>{cpf}</ClientCpf>
      <ClientName>{name}</ClientName>
      <PrimaryButton>Solicitar</PrimaryButton>
    </ClientBox>
  );
}
