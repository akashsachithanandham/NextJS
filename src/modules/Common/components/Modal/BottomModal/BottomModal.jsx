import React from 'react';
import cn from 'classnames';

import BaseModal from '../BaseModal/BaseModal';

import './BottomModal.scss';

function BottomModal({
  isOpen = false,
  contentClassNames = '',
  contentStyle,
  onClose,
  children
}) {

  const handleContentClick = (e) => {
    e.stopPropagation();
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className='bottom-modal'>
        <div className={cn('bottom-modal__dialog', { ['bottom-modal__dialog--open']: isOpen})}>
          <div 
            className={cn(['bottom-modal__content', contentClassNames])} 
            style={contentStyle}
            onClick={handleContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export default BottomModal