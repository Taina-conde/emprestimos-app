import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Result {
  status: string;
  client: {
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
}

const initialState: Result = {
  status: "",
  client: {
    id: 0,
    name: "",
    phone: "",
    cpf: "",
    bank: {
      label: "",
      accountTypeLabel: "",
      accountNumber: "",
    },
  },
};

const searchResultSlice = createSlice({
  name: "searchResult",
  initialState,
  reducers: {
    setSearchResult(state, action: PayloadAction<Result>) {
      state.status = action.payload.status;
      state.client = action.payload.client;
    },
  },
});
export const { setSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
