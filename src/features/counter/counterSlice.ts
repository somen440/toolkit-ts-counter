import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from 'app/store';
import { RootState } from 'app/rootReducer';

interface CounterState {
  value: number;
};

const initialState: CounterState = {
  value: 0
};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount
} = counter.actions

export const incrementAsync = (amount: number): AppThunk => async dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
}

export const selectCount = (state: RootState) => state.counter.value;

export default counter.reducer;
