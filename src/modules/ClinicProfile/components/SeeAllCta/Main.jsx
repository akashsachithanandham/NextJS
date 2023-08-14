import React from 'react'

import './SeeAllCta.scss';

function Main({
  ctaText = '',
  onClick
}) {
  return (
    <button className='see-all-doctors-cta' onClick={onClick}>{ctaText}</button>
  )
}

export default Main