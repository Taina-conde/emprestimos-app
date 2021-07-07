import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRateTables } from '../../pages/api/helpers';


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

const initialState: RateTables = getRateTables()
console.log(initialState)


const rateTablesSlice = createSlice({
    name: 'rateTables',
    initialState,
    reducers: {
      receiveRateTables(state, action : PayloadAction<any[]>) {
        state.rateTables = action.payload
      },
     
    },
  })
  export const { receiveRateTables } = rateTablesSlice.actions
  export default rateTablesSlice.reducer
