import React, { ChangeEvent } from 'react'
import Button from './button/button';
import InputSelect from './input-select/input-select';
import InputText from './input-text/input-text';
import styles from './index.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { resetForm, setField, setOperator, setValue } from '../../store/reducers/form';
import { setFilteredData, setIsFiltered } from '../../store/reducers/table';
import { equal, includes, less, more } from '../../utils/filters';

enum Fields {
  date = "Дата",
  name = "Название",
  count = "Количество",
  distance = "Расстояние",
}

enum Operators {
  equal = 'Равно',
  includes = 'Содержит',
  more = 'Больше',
  less = 'Меньше'
}


const Filter = () => {
  const { container, btnContainer } = styles;

  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.table.data);
  const field = useSelector((state: RootState) => state.form.field);
  const operator = useSelector((state: RootState) => state.form.operator);
  const value = useSelector((state: RootState) => state.form.value);
  const isFiltered = useSelector((state: RootState) => state.table.isFiltered);

  const onChangeFieldHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setField(e.target.value));
  };
  const onChangeOperatorHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOperator(e.target.value));
  };
  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.currentTarget.value));
  };

  const onFilterClickHandler = () => {
    if (field && operator && value) {
      dispatch(setIsFiltered(true));
      const fieldNum = () => { switch(field) {
        case Fields.name:
          return 2;
        case Fields.count:
          return 3;
        case Fields.distance:
          return 4;
        default:
          return 2;
        }
      }
      switch (operator) {
        case Operators.equal:
          dispatch(setFilteredData(equal(fieldNum(), data,value)))
          break;
        case Operators.includes:
          dispatch(setFilteredData(includes(fieldNum(), data,value)))
          break;
        case Operators.more:
          dispatch(setFilteredData(more(fieldNum(), data,value)))
          break;
        case Operators.less:
          dispatch(setFilteredData(less(fieldNum(), data,value)))
          break;
        default:
          break;
      }
    }
  };

  const onResetClickHandler = () => {
    dispatch(resetForm());
    dispatch(setIsFiltered(false));
  }

  return (
    <>
      <h2>Фильтр</h2>
      <div className={container}>
        <InputSelect title='Колонка' placeholder='Не выбрано' value={field} options={[Fields.name, Fields.count, Fields.distance]} onChange={onChangeFieldHandler}/>
        <InputSelect title='Условие' placeholder='Не выбрано' value={operator} options={[Operators.equal, Operators.includes, Operators.more, Operators.less]} onChange={onChangeOperatorHandler}/>
        <InputText title='Значение' value={value} onChange={onChangeValueHandler}/>
        <div className={btnContainer}>
          {isFiltered && <Button title='Сбросить' onClick={onResetClickHandler}/>}
          <Button title='Отфильтровать!' onClick={onFilterClickHandler}/>
        </div>
      </div>
    </>
  )
}

export default Filter;
