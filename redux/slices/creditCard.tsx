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
        state = action.payload
      },
     
    },
  })
  export const { setCreditCard } = creditCardSlice.actions
  export default creditCardSlice.reducer