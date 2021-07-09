import Layout from "../../components/Layout";
import { useAppSelector } from "../../hooks";
import CardInfoForm from "../../components/CardInfoForm";

export default function DadosCartao() {
  const result = useAppSelector((state) => state.searchResult);

  return (
    <Layout title="Solicitar Empréstimo">
      <CardInfoForm />
    </Layout>
  );
}
