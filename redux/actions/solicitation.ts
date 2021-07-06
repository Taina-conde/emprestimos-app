import { createAction } from '@reduxjs/toolkit'

const setDesiredValue = createAction<number | undefined>('SET_DESIRED_VALUE')