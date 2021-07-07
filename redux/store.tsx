import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import solicitationReducer from "./slices/solicitation";
import rateTablesReducer from "./slices/rateTables";
import clientsReducer from './slices/clients';
import { getRateTables, getClients } from "../pages/api/helpers";


let store;
const rateTables = getRateTables();
const clients = getClients();

interface State {
  solicitation: {
    id: string;
    clientId: string;
    cardNumber: string;
    desiredValue: number;
    rateTableId: string;
    installmentId: string;
    installmentInterest: number;
    installmentInterestValue: number;
    totalLoan: number;
    installmentValue: number;
    comission: number;
    comissionValue: number;
    contractType: string;
  };
  rateTables: {
    id: number;
    name: string;
    installments: {
      id: number;
      installments: number;
      installmentInterest: number;
      installmentValue: number;
      fullValue: number;
      comission: number;
    }[];
  }[];
  clients: {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: {
      label: string;
      accountTypeLabel: string;
      accountNumber: string;
    };
  }[];
}

const initialState = {
  solicitation: {
    id: "",
    clientId: "",
    cardNumber: "",
    desiredValue: 0,
    rateTableId: "",
    installmentId: "",
    installmentInterest: 0,
    installmentInterestValue: 0,
    totalLoan: 0,
    installmentValue: 0,
    comission: 0,
    comissionValue: 0,
    contractType: "",
  },
  rateTables: rateTables,
  clients: clients,
};

function initStore(preloadedState = initialState) {
  return configureStore({
    reducer: {
      solicitation: solicitationReducer,
      rateTables: rateTablesReducer,
      clients: clientsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState,
  });
}

export const initializeStore = (preloadedState: State) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
export function useStore(initialState: State) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
