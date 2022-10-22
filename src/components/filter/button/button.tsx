import React, {FC} from 'react'
import styles from './button.module.css'

interface IButtonProps {
  title: string
  onClick: () => void
}


const Button: FC<IButtonProps> = ({title, onClick}) => {
  const { button } = styles;
  return (
    <button className={button} onClick={onClick}>{title}</button>
  )
}

export default Button;
