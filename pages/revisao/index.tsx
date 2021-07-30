import Layout from "../../components/Layout";
import Revisao from '../../components/Revisao';
import {getRateTables, getRateTableById, getInstallmentById} from '../../utils/api/helpers';
import { useAppSelector } from "../../hooks";



export default function RevisaoPage() {

  
  return (
    <Layout title="Solicitar Empréstimo">
      <Revisao/>
    </Layout>
  );
}
