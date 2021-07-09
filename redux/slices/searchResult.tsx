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

const initialState: string = "";


const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers: {
      setSearchResult(state: Result | string, action : PayloadAction<Result| string>) {
        if (typeof action.payload === 'string') {
            state = action.payload
        } else {
            state = {...action.payload}
        }
        
      },
     
    },
  })
  export const { setSearchResult } = searchResultSlice.actions
  export default searchResultSlice.reducer