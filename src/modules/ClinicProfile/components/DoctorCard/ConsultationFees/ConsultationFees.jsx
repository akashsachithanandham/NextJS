import React from 'react'

import './ConsultationFees.scss'

function ConsultationFees({
  amount
}) {

  const feesText = amount ? `${amount} ` : ''

  if(!amount) {
    return null;
  }

  return (
    <div className='consultation-fees'>
      <span className='consultation-fees__amount'>₹{amount}</span>
      <span>&#160;Consultation Fees (Approximate)</span>
    </div>
  )
}

export default ConsultationFees