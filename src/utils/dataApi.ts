import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataType } from '../types/types';

const getDataReq = 'http://localhost:4000/table/get'
const mockData: DataType[][] = [
  [1,"1998-12-31",'Россия',10,20],
  [2,"1999-12-31",'Украина',30,40],
  [3,"2000-12-31",'Беларусь',50,60],
  [4,"2001-12-31",'Казахстан',70,80],
  [5,"2002-12-31",'Грузия',90,100],
  [6,"2003-12-31",'Армения',110,120],
]

export const getData = createAsyncThunk<DataType[][], void, {rejectValue: DataType[][]}>(
  'table/getData',
  async (data, thunkApi) => {
    try {
      const res = await fetch(getDataReq);
      if (res.ok) {
        const json = await res.json()
        return json;
      } else {
        return mockData;
      }
    } catch (e) {
      console.log(e)
      return thunkApi.rejectWithValue(mockData, );
    }
  }
)
