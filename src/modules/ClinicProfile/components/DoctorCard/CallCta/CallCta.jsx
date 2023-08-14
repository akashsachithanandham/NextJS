import React from 'react'
import cn from 'classnames';

import './CallCta.scss';

function CallCta({
  type,
  ctaText,
  isDisabled,
  vnNumber,
}) {

  const classNames = cn({
    'call-cta': !isDisabled,
    [`call-cta--${type}`]: !isDisabled,
    'call-cta--disabled': isDisabled
  })

  return (
    <a className={classNames} href={`tel:${vnNumber}`}>
    {ctaText}
  </a>  
  )
}

export default CallCta