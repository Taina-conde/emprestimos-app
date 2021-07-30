import Layout from "../../components/Layout";
import Revisao from '../../components/Revisao';
import {getRateTables, getRateTableById, getInstallmentById} from '../../utils/api/helpers';
import { useAppSelector } from "../../hooks";



export default function RevisaoPage({rateTable, installment}) {
  const solicitation = useAppSelector((state) => state.solicitation);
  console.log('rate table', rateTable)
  console.log('solicitation', solicitation)
  
  return (
    <Layout title="Solicitar Empréstimo">
      <Revisao/>
    </Layout>
  );
}
export async function getStaticProps() {
  const rateTable = getRateTableById()
  const installment = getInstallmentById()
  return {
    props: {
      rateTable,
      installment

    }
  }
}