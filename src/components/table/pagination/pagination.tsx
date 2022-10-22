import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementPage, incrementPage } from '../../../store/reducers/table';
import { RootState } from '../../../store/store';
import { ROWS_ON_PAGE } from '../../../utils/constants';
import Button from '../../filter/button/button';
import styles from './pagination.module.css';

const Pagination = () => {
  const { pagination } = styles;
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.table.page);
  const isFiltered = useSelector((state: RootState) => state.table.isFiltered);
  const filteredData = useSelector((state: RootState) => state.table.filteredData);
  const data = useSelector((state: RootState) => state.table.data);

  const prevPageHandler = () => {
    dispatch(decrementPage())
  }

  const nextPageHandler = () => {
    dispatch(incrementPage())
  }

  return (
    <div className={pagination}>
      <Button title='Предыдущая' onClick={prevPageHandler}/>
      <Button title={`${page} из ${isFiltered?Math.ceil(filteredData.length/ROWS_ON_PAGE):Math.ceil(data.length/ROWS_ON_PAGE)}`} onClick={() => {}}/>
      <Button title='Следующая' onClick={nextPageHandler}/>
    </div>
  )
}

export default Pagination;