import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getClientById } from "../../pages/api/helpers";

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
      state = { ...action.payload };
    },
  },
});
export const { setSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
