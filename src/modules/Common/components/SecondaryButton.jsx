import React from 'react'
import SecondaryButtonStyles from './SecondaryButton.module.css'

function SecondaryButton({button_text, onClickHandler}) {
  return (
    <div className={SecondaryButtonStyles.secondary_button} onClick={onClickHandler}>
      {button_text}
    </div>
  )
}

export default SecondaryButton