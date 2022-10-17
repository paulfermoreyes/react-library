import './style.css'

import React, { FC } from 'react'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ type, text, onClick }) => (
  <button type="button" className={`Button Button-${type}`} onClick={onClick}>
    {text}
  </button>
)

export default Button
