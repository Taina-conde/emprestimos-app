import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getClients } from '../../pages/api/helpers';


interface Clients {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: {
      label: string;
      accountTypeLabel: string;
      accountNumber: string;
    };
  }[];

const initialState = getClients()


const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
      receiveClients(state, action : PayloadAction<any[]>) {
        state = action.payload
      },
     
    },
  })
  export const { receiveClients } = clientsSlice.actions
  export default clientsSlice.reducer