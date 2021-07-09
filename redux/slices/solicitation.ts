import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Solicitation {
  desiredValue: number;
  installmentInterest: number;
  installmentInterestValue: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
  totalLoan: number;
  installmentId: number;
  rateTableId: number;
  clientId: number;
  cardNumber: string;
}
interface InstallmentInfo {
  installmentInterest: number;
  installmentInterestValue: number;
  comission: number;
  comissionValue: number;
  installmentValue: number;
  totalLoan: number;
  installmentId: number;
  rateTableId: number;
}
const initialState = {
  desiredValue: 0,
  installmentInterest: 0,
  installmentInterestValue: 0,
  comission: 0,
  comissionValue: 0,
  installmentValue: 0,
  totalLoan: 0,
  installmentId: 0,
  rateTableId: 0,
  clientId: 0,
  cardNumber: "",
} as Solicitation;

const solicitationSlice = createSlice({
  name: "solicitation",
  initialState,
  reducers: {
    setDesiredValue(state, action: PayloadAction<number>) {
      state.desiredValue = action.payload;
    },
    setChosenInstallment(state, action: PayloadAction<InstallmentInfo>) {
      state.installmentInterest = action.payload.installmentInterest
      state.installmentInterestValue = action.payload.installmentInterestValue
      state.comission = action.payload.comission
      state.comissionValue = action.payload.comissionValue
      state.installmentValue = action.payload.installmentValue
      state.totalLoan = action.payload.totalLoan
      state.installmentId = action.payload.installmentId
      state.rateTableId = action.payload.rateTableId
  },
  setClientId(state, action: PayloadAction<number>) {
    state.clientId = action.payload
  },
  setCardNumber(state, action: PayloadAction<string>) {
    state.cardNumber = action.payload
  },
}
});
export const { setCardNumber, setDesiredValue, setChosenInstallment, setClientId } = solicitationSlice.actions;
export default solicitationSlice.reducer;
