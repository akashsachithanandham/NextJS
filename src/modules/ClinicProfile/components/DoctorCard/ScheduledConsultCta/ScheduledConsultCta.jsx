import React from 'react'
import cn from 'classnames';

import './ScheduledConsultCta.scss';

function ScheduledConsultCta({
  type,
  ctaText,
  isDisabled,
  onClick
}) {

  const classNames = cn({
    'schedule-consult-cta': !isDisabled,
    [`schedule-consult-cta--${type}`]: !isDisabled,
    'schedule-consult-cta--disabled': isDisabled
  })

  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {ctaText}
    </button>
  )
}

export default ScheduledConsultCta