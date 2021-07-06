import { createReducer } from '@reduxjs/toolkit';
import { setDesiredValue } from '../actions/solicitation'

interface Solicitation {
    desiredValue: number;
}
const initialState = {
    desiredValue : 0,
} as Solicitation

export const solicitationReducer =createReducer(initialState, (builder) => {
    builder
    .addCase(setDesiredValue, (state, action) => {
        state.desiredValue = action.payload;
    })
})