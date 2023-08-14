import React from 'react'
import cn from 'classnames';

import './OfflineBookCta.scss';

function OfflineBookCta({
  type,
  ctaText,
  isDisabled,
  onClick
}) {

  const classNames = cn({
    'offline-book-cta': !isDisabled,
    [`offline-book-cta--${type}`]: !isDisabled,
    'offline-book-cta--disabled': isDisabled
  })
  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {ctaText}
    </button>  
  )
}

export default OfflineBookCta