'use client';

import React, { useCallback, useState } from 'react'
import AccordionHeader from './AccordionHeader'
import AccordionBody from './AccordionBody';
import { AccordionContext } from './contexts';

import './Accordion.scss';

function Accordion({
  id = '',
  isOpen = false,
  children
}) {

  const [ isItemOpen, setIsItemOpen ] = useState(isOpen);

  const handleClick = useCallback(() => {
    setIsItemOpen(open => !open)
  }, []);

  const contextValue = {
    isOpen: isItemOpen
  }

  return (
    <div id={id} className='accordion' onClick={handleClick}>
       <AccordionContext.Provider value={contextValue}>
        {children}
       </AccordionContext.Provider>
    </div>
  )
}

Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody

export default Accordion