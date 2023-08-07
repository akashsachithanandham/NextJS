import React from 'react'
import  PrimayButtonStyles from './PrimaryButton.module.css';

function PrimaryButton({ button_text, onClickHandler}) {
  return (
    <div className={PrimayButtonStyles.primary_button} onClick={onClickHandler}>
      {button_text}
    </div>
  )
}

export default PrimaryButton;