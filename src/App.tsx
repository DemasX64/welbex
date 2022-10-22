import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filter from './components/filter';
import Table from './components/table';
import styles from './app.module.css'
import { getData } from './utils/dataApi';
import { AppDispatch } from './store/store';

function App() {
  const { container } = styles;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className={container}>
      <Filter />
      <Table />
    </div>
  );
}

export default App;
