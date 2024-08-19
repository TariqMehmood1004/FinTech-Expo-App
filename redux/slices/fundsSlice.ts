import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FundsState {
  funds: any[];
}

const initialState: FundsState = {
  funds: [],
};

const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    setFunds: (state, action: PayloadAction<any[]>) => {
      state.funds = action.payload;
    },
  },
});

export const { setFunds } = fundsSlice.actions;
export default fundsSlice.reducer;
