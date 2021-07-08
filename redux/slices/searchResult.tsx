import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getClientById } from '../../pages/api/helpers';


interface Result {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: {
      label: string;
      accountTypeLabel: string;
      accountNumber: string;
    };
  };

const initialState: Result | string = getClientById(0);


const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers: {
      setSearchResult(state, action : PayloadAction<Result| string>) {
        state = action.payload
      },
     
    },
  })
  export const { setSearchResult } = searchResultSlice.actions
  export default searchResultSlice.reducer