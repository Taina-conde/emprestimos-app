import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Solicitation {
    desiredValue: number;
}
const initialState = {
    desiredValue : 0,
} as Solicitation

const solicitationSlice = createSlice({
    name: 'solicitation',
    initialState,
    reducers: {
      setDesiredValue(state, action : PayloadAction<number>) {
        state.desiredValue = action.payload
      },
     
    },
  })
  export const { setDesiredValue} = solicitationSlice.actions
  export default solicitationSlice.reducer
