import { combineReducers } from '@reduxjs/toolkit'
import { solicitationReducer } from './solicitation';

export const rootReducer = combineReducers({
    solicitation: solicitationReducer,
    
})
export type RootState = ReturnType<typeof rootReducer>