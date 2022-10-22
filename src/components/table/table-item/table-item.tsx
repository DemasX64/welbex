import React, { FC } from 'react'
import { DataType } from '../../../types/types';

interface ITableItemProps {
  row: DataType[]
}

const TableItem: FC<ITableItemProps> = ({row}) => {
  return (
    <tr>
      <th>{(new Date(row[1])).toLocaleDateString()}</th>
      <th>{row[2].toString()}</th>
      <th>{row[3].toString()}</th>
      <th>{row[4].toString()}</th>
    </tr>
  )
}

export default TableItem;