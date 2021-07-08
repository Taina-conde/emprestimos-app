import { ClientBox, ClientCpf, ClientName } from './styled';
import PrimaryButton from '../shared/PrimaryButton';

export default function ClientFound() {
    return <ClientBox>
        <div>
            Cliente encontrado:
        </div>
        <ClientCpf>
            
        </ClientCpf>
        <ClientName>

        </ClientName>
        <PrimaryButton>
            Solicitar
        </PrimaryButton>
        
    </ClientBox>
}