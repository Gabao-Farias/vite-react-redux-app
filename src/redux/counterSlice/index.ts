import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CounterSliceState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementWithUnusefulArguments: (state, action: PayloadAction<UnusefulArguments>) => {
        state.value += 5;
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementWithUnusefulArguments } = counterSlice.actions;

export default counterSlice.reducer;
