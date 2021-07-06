import Layout from "../components/Layout";
import DesiredValueForm  from '../components/DesiredValueForm';
import RateTableForm from '../components/RateTableForm';
import { useAppSelector, useAppDispatch } from "../hooks";



export default function Home() {
  const desiredValue = useAppSelector((state) => state.solicitation.desiredValue)
  return (
    <Layout title="Simulação de taxas">
      <div>
        <DesiredValueForm/>
        { desiredValue !== 0 && <RateTableForm/>}
        
      </div>
    </Layout>
  );
}
