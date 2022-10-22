import React, {FC, ChangeEvent} from 'react'
import styles from './input-text.module.css'

interface IInputTextProps {
  title: string
  value: string
  onChange: (e :ChangeEvent<HTMLInputElement>) => void
}

const InputText: FC <IInputTextProps> = ({title, value, onChange}) => {
  const { input, label, inputTitle, inputText } = styles;

  return (
    <form className={input}>
      <label className={label}>
        <p className={inputTitle}>{title}</p>
        <input className={inputText} type="text" value={value} onChange={onChange} />
      </label>
    </form>
  )
}

export default InputText;