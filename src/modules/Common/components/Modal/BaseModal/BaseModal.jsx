'use client';

import React, { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import cn from 'classnames'

import './BaseModal.scss';

function BaseModal({
  isOpen,
  onClose,
  children
}) {

  let [ portalNode, setPortalNode ] = useState(null);

  useLayoutEffect(() => {
    let portalRef = document.createElement('div');
    portalRef.setAttribute('id', 'modal-root');
    document.body.append(portalRef);
    setPortalNode(portalRef)
  }, [])

  const modalOverlayClassName = cn('modal__overlay', {
    ['modal__overlay--open']: isOpen,
  })

  let modal = (
    <div className={cn('modal', {['modal--open']: isOpen})}>
      <div className={modalOverlayClassName} onClick={onClose}>{children}</div>
    </div>
  )

  if(!portalNode) {
    return null;
  }

  return createPortal(modal, portalNode)
}

export default BaseModal