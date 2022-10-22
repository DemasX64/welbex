import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/form';
import tableReducer from './reducers/table';

const store = configureStore({
  reducer: {
    form: formReducer,
    table: tableReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;