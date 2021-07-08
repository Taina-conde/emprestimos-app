import Layout from "../../components/Layout";
import { useAppSelector, useAppDispatch } from "../../hooks";



export default function BuscarCliente() {
  const solicitation = useAppSelector((state) => state.solicitation)
  return (
    <Layout title="Solicitar Empréstimo">
      <div>
        Buscar cliente
        
      </div>
    </Layout>
  );
}