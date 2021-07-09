import Layout from "../../components/Layout";
import { useAppSelector } from "../../hooks";

export default function DadosCartao() {
  const result = useAppSelector((state) => state.searchResult)

  return (
    <Layout title="Solicitar Empréstimo">
   dados do cartao
      
    </Layout>
  );
}