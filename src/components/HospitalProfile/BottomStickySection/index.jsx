import React from 'react'
import BottomStickyStyles from './index.module.css'
import SecondaryButton from '@/components/Common/SecondaryButton';
import PrimaryButton from '@/components/Common/PrimaryButton';

const primary_button_text = 'Book Clinic Vist';
const secondary_button_text = 'Call Now';

function BottomStickySection() {
  return (
    <div className={BottomStickyStyles.bottom_sticky_wrapper}>
      <SecondaryButton button_text={secondary_button_text}/>
      <PrimaryButton button_text={primary_button_text} />
    </div>
  )
}

export default BottomStickySection;