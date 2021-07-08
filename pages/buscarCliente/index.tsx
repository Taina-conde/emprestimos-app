import Layout from "../../components/Layout";
import ClientSearch from "../../components/ClientSearch";
import ClientSearchResult from '../../components/ClientSearchResult';
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getClientById } from '../api/helpers';

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
export default function BuscarCliente() {
  const solicitation = useAppSelector((state) => state.solicitation);
  const result: Client | string = getClientById(solicitation.clientId)
  return (
    <Layout title="Solicitar Empréstimo">
    
        <ClientSearch/>
        { solicitation.clientId !== 0 && <ClientSearchResult result = {result}/> }
      
    </Layout>
  );
}