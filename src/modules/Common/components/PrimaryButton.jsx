import React from 'react'
import  PrimayButtonStyles from './PrimaryButton.module.css';

function PrimaryButton({ buttonText, onClickHandler}) {
  return (
    <div className={PrimayButtonStyles.primary_button} onClick={onClickHandler}>
      {buttonText}
    </div>
  )
}

export default PrimaryButton;