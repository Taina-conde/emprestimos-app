import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Card {
    name: string;
    clientId: number;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
  };

const initialState: Card = {
    name: "",
    clientId: 0,
    cardNumber: "",
    expirationDate: "",
    cvc: "",

}


const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers: {
      setCreditCard(state, action : PayloadAction<Card>) {
        state.name = action.payload.name;
        state.clientId = action.payload.clientId;
        state.cardNumber = action.payload.cardNumber;
        state.expirationDate = action.payload.expirationDate;
        state.cvc = action.payload.cvc;
      },
     
    },
  })
  export const { setCreditCard } = creditCardSlice.actions
  export default creditCardSlice.reducer