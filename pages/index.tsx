import Layout from "../components/Layout";

import DesiredValueForm  from '../components/DesiredValueForm';



export default function Home() {
  return (
    <Layout title="Simulação de taxas">
      <div>
        <DesiredValueForm/>
      </div>
    </Layout>
  );
}
