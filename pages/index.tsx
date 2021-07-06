import Layout from "../components/Layout";

import DesiredValueForm  from '../components/DesiredValueForm';
import RateTableForm from '../components/RateTableForm';



export default function Home() {
  return (
    <Layout title="Simulação de taxas">
      <div>
        <DesiredValueForm/>
        <RateTableForm/>
      </div>
    </Layout>
  );
}
