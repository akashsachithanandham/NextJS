import React from 'react'
import SecondaryButton from '@/modules/Common/components/SecondaryButton';
import PrimaryButton from '@/modules/Common/components/PrimaryButton';
import fetchClinicProfileData from '../../utils/fetchClinicProfileData';
import './index.scss'

const primaryButtonText = 'Book Clinic Vist';
const secondaryButtonText = 'Call Now';

async function BottomStickySection({routeInfo}) {

  const clinicProfileDetails = await fetchClinicProfileData(routeInfo);

  
  return (
    <div className={'bottom_sticky_wrapper'}>
      <SecondaryButton buttonText={secondaryButtonText}/>
      <PrimaryButton buttonText={primaryButtonText} />
    </div>
  )
}

export default BottomStickySection;