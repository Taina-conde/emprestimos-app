import Layout from "../../components/Layout";
import ClientSearch from "../../components/ClientSearch";
import ClientSearchResult from '../../components/ClientSearchResult';
import { useAppSelector } from "../../hooks";

export default function BuscarCliente() {
  const result = useAppSelector((state) => state.searchResult)

  return (
    <Layout title="Solicitar Empréstimo">
    
        <ClientSearch/>
        { result.status !== "" && <ClientSearchResult result = {result}/> }
      
    </Layout>
  );
}