import React from 'react'
import './SecondaryButton.scss'

function SecondaryButton({buttonText, onClickHandler}) {
  return (
    <div className='secondary-button' onClick={onClickHandler}>
      {buttonText}
    </div>
  )
}

export default SecondaryButton