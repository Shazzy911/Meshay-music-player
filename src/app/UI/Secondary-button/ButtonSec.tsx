import React from 'react'
import style from "./ButtonSec.module.scss"



interface buttonType {
  text?: string;
}
const ButtonSec = ({text}: buttonType) => {
  return (
    <button className={style.container}>{text}</button>
  )
}

export default ButtonSec