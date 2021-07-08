import { Wrapper, ClientNotFound } from "./styled";
import {ClientFound} from './ClientFound';
import { useAppDispatch} from '../../hooks';
import { getClientById } from '../../pages/api/helpers';

interface OtherProps {
    clientId: number;
}

export default function ClientSearchResult(props: OtherProps ) {
  return <Wrapper>

      
  </Wrapper>;
}
