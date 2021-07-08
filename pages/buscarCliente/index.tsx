import Layout from "../../components/Layout";
import ClientSearch from "../../components/ClientSearch";
import ClientSearchResult from '../../components/ClientSearchResult';
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getClientById } from '../api/helpers';


export default function BuscarCliente() {
  const solicitation = useAppSelector((state) => state.solicitation);
  const result = getClientById(solicitation.clientId)
  return (
    <Layout title="Solicitar Empréstimo">
      <div>
        <ClientSearch/>
        <ClientSearchResult result = {result}/>
        
      </div>
    </Layout>
  );
}