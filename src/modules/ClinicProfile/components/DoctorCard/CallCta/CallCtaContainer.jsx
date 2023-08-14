import React from 'react'
import CallCta from './CallCta'

function CallCtaContainer({
  type,
  ctaText,
  isDisabled
}) {

  return (
    <CallCta 
      type={type}
      ctaText={ctaText}
      isDisabled={isDisabled}
    />
  )
}

export default CallCtaContainer