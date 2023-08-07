import React from 'react'
import SecondaryButtonStyles from './SecondaryButton.module.css'

function SecondaryButton({buttonText, onClickHandler}) {
  return (
    <div className={SecondaryButtonStyles.secondary_button} onClick={onClickHandler}>
      {buttonText}
    </div>
  )
}

export default SecondaryButton