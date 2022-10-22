/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFormState {
  field: string
  operator: string
  value: string
}

const initialState: IFormState = {
  field: '',
  operator: '',
  value: '',
};

const formReducer = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setField (state, action: PayloadAction<string>) {
      state.field = action.payload;
    },
    setOperator (state, action: PayloadAction<string>) {
      state.operator = action.payload;
    },
    setValue (state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    resetForm (state) {
      state.field = '';
      state.operator = '';
      state.value = '';
    }
  },
});

export const {
  setField, setOperator, setValue, resetForm
} = formReducer.actions;
export default formReducer.reducer;