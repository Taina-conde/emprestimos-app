import Layout from "../../components/Layout";
import ClientSearch from "../../components/ClientSearch";
import ClientSearchResult from '../../components/ClientSearchResult';
import { useAppSelector } from "../../hooks";

export default function BuscarCliente() {
  const result = useAppSelector((state) => state.searchResult)
  const type = typeof result
  console.log('result dentro do buscarcliente', type)
  return (
    <Layout title="Solicitar Empréstimo">
    
        <ClientSearch/>
        { result !== "" && <ClientSearchResult result = {result}/> }
      
    </Layout>
  );
}