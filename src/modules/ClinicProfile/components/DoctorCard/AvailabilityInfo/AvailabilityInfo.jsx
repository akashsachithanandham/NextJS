import React from 'react'

import './AvailabilityInfo.scss';
import IconClinic from '@/modules/Common/components/Icons/IconClinic';
import ctaTypeEnums from '@/modules/ClinicProfile/constants/ctaTypeEnums';
import IconVideo from '@/modules/Common/components/Icons/IconVideo';

function AvailabilityInfo({
  ctaType = '',
  availabilityText = ''
}) {

  if(!availabilityText) {
    return null;
  }

  let offlineBookCtaTypes = [
    ctaTypeEnums.book,
    ctaTypeEnums.rfa
  ]

  return (
    <div className='availability-info'>
      {offlineBookCtaTypes.includes(ctaType) ? <IconClinic /> : null}
      {ctaType === ctaTypeEnums.scheduled_consult ? <IconVideo /> : null}
      <span className='availability-info__text'>{availabilityText}</span>
    </div>
  )
}

export default AvailabilityInfo