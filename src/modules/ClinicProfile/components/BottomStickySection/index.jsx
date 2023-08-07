import React from 'react'
import BottomStickyStyles from './index.module.css'
import SecondaryButton from '@/modules/Common/SecondaryButton';
import PrimaryButton from '@/modules/Common/PrimaryButton';

const primaryButtonText = 'Book Clinic Vist';
const secondaryButtonText = 'Call Now';

function BottomStickySection() {
  return (
    <div className={BottomStickyStyles.bottom_sticky_wrapper}>
      <SecondaryButton button_text={secondaryButtonText}/>
      <PrimaryButton button_text={primaryButtonText} />
    </div>
  )
}

export default BottomStickySection;