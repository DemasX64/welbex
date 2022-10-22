/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getData } from '../../utils/dataApi';
import { ROWS_ON_PAGE } from '../../utils/constants';
import { DataType } from '../../types/types';

export interface ITableState {
  data: DataType[][],
  isFiltered: boolean,
  page: number,
  filteredData: DataType[][]
}


const initialState: ITableState = {
  data: [],
  isFiltered: false,
  page: 1,
  filteredData: []
};

const tableReducer = createSlice({
  name: 'table',
  initialState,
  reducers: {
    incrementPage(state) {
      if(state.isFiltered) {
        if (state.page + 1 <= Math.ceil(state.filteredData.length/ROWS_ON_PAGE)) {
          state.page++;
        }
      } else {
        if (state.page + 1 <= Math.ceil(state.data.length/ROWS_ON_PAGE)) {
          state.page++;
        }
      }
     
    },
    decrementPage(state) {
      if (state.page - 1 > 0) {
        state.page--;
      }
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setIsFiltered(state, action: PayloadAction<boolean>) {
      state.isFiltered = action.payload;
    },
    setFilteredData(state, action: PayloadAction<DataType[][]>){  
      state.filteredData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {

    })
    builder.addCase(getData.fulfilled, (state, action ) => {
      state.data = action.payload;
    })
    builder.addCase(getData.rejected, (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      }   
    })
  }
});

export const {
  setPage, setIsFiltered, setFilteredData, incrementPage, decrementPage
} = tableReducer.actions;
export default tableReducer.reducer;