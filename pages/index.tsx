import Layout from "../components/Layout";
import DesiredValueForm  from '../components/DesiredValueForm';
import RateTableGroup from '../components/RateTableGroup';
import { useAppSelector, useAppDispatch } from "../hooks";



export default function Home() {
  const desiredValue = useAppSelector((state) => state.solicitation.desiredValue)
  return (
    <Layout title="Simulação de taxas">
      <div>
        <DesiredValueForm/>
        { desiredValue !== 0 && <RateTableGroup/>}
        
      </div>
    </Layout>
  );
}
