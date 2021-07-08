import Layout from "../../components/Layout";
import ClientSearch from "../../components/ClientSearch";
import { useAppSelector, useAppDispatch } from "../../hooks";



export default function BuscarCliente() {
  const solicitation = useAppSelector((state) => state.solicitation)
  return (
    <Layout title="Solicitar Empréstimo">
      <div>
        <ClientSearch/>
        
      </div>
    </Layout>
  );
}