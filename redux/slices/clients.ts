import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getClients } from '../../pages/api/helpers';


interface RateTables {
    id: number;
    name: string;
    installments: {
        id: number;
        installments: number;
        installmentInterest: number;
        installmentValue: number;
        fullValue: number;
        comission: number;
    }[];
}[]

const initialState = getClients()
console.log(initialState)


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