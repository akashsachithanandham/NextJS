import React from 'react'
import './PrimaryButton.scss';

function PrimaryButton({ buttonText, onClickHandler}) {
  return (
    <div className='primary-button' onClick={onClickHandler}>
      {buttonText}
    </div>
  )
}

export default PrimaryButton;