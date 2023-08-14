import React from 'react'

import './LocationInfo.scss';
import IconDot from '@/modules/Common/components/Icons/IconDot';

function LocationInfo({
  localityName,
  establishmentName
}) {

  if(!localityName) {
    return null;
  }

  return (
    <div  className='locality-info'>
      <span className='locality-info__locality-name'>{localityName}</span>
      <span className='locality-info__separator'><IconDot /></span>
      {establishmentName && <span className='locality-info__estab-name'>{establishmentName}</span>}
      <span></span>
    </div>
  )
}

export default LocationInfo