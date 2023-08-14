'use client';

import React, { useContext } from 'react'
import cn from 'classnames';

import { AccordionContext } from './contexts';
import IconPlus from '../Icons/IconPlus';
import IconMinus from '../Icons/IconMinus';

function AccordionHeader({
  classNames, 
  customToggleOpen,
  customToggleClose,
  children
}) {

  const { isOpen } = useContext(AccordionContext);

  let ToggleIcon = null;

  if(customToggleOpen && customToggleClose) {
    ToggleIcon = isOpen ? customToggleClose : customToggleOpen
  }
  else {
    ToggleIcon = isOpen ? <IconMinus /> : <IconPlus />
  }

  return (
    <div className={cn(['accordion__header', classNames])}>
      <div>{children}</div>
      <div>{ToggleIcon}</div>
    </div>
  )
}

export default AccordionHeader