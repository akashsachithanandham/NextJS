'use client';

import React, { useContext } from 'react'
import cn from 'classnames';
import { AccordionContext } from './contexts';

function AccordionBody({
  classNames,
  children
}) {

  const { isOpen } = useContext(AccordionContext);

  return (
    <div className={cn(['accordion__body', classNames], { [`accordion__body--open`]: isOpen })}>
      {children}
    </div>
  )
}

export default AccordionBody