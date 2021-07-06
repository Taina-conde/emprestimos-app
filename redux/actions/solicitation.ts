import { createAction } from '@reduxjs/toolkit'

export const setDesiredValue = createAction<number | undefined>('SET_DESIRED_VALUE');

