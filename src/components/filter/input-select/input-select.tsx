import React, { FC, ChangeEvent } from 'react'
import styles from './input-select.module.css'

interface InputSelectProps {
  title: string
  placeholder: string
  options: string[]
  onChange: (e :ChangeEvent<HTMLSelectElement>) => void
  value: string
}

const InputSelect: FC<InputSelectProps> = ({title, placeholder, options, onChange, value}) => {
  const {input, label, inputTitle, select} = styles;
  return (
    <form className={input}>
      <label className={label} >
        <p className={inputTitle}>{title}</p>
        <select value={value} className={select} onChange={onChange}>
          <option value="">{placeholder}</option>
          {options.map((option, index) => 
            <option key={index}>{option}</option>
          )}
        </select>
      </label>
    </form>
  )
}

export default InputSelect