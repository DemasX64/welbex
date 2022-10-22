import React from 'react';
import styles from './index.module.css';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import TableItem from './table-item/table-item';
import Pagination from './pagination/pagination';
import { ROWS_ON_PAGE } from '../../utils/constants';

const Table = () => {
  const { table } = styles;

  const data = useSelector((state: RootState) => state.table.data);
  const isFiltered = useSelector((state: RootState) => state.table.isFiltered);
  const page = useSelector((state: RootState) => state.table.page);
  const filteredData = useSelector((state: RootState) => state.table.filteredData);
  return (
    <>
      <h2>Таблица</h2>
      <table className={table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          { !isFiltered && data.map((item, index) => ((index+1>((page-1)*ROWS_ON_PAGE))&&(index+1<=(page*ROWS_ON_PAGE)))?<TableItem key={Number(item[0])} row={item} />:<></>)}
          { isFiltered && filteredData.map((item, index) => ((index+1>((page-1)*ROWS_ON_PAGE))&&(index+1<=(page*ROWS_ON_PAGE)))?<TableItem key={Number(item[0])} row={item} />:<></>)}
        </tbody>
      </table>
      <Pagination />
    </> 
  )
}

export default Table;