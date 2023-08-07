import React from 'react'
import BottomStickyStyles from './index.module.css'
import SecondaryButton from '@/modules/Common/components/SecondaryButton';
import PrimaryButton from '@/modules/Common/components/PrimaryButton';
import fetchClinicProfileData from '../../utils/fetchClinicProfileData';

const primaryButtonText = 'Book Clinic Vist';
const secondaryButtonText = 'Call Now';

async function BottomStickySection({routeInfo}) {

  const clinicProfileDetails = await fetchClinicProfileData(routeInfo);

  console.log(clinicProfileDetails);

  
  return (
    <div className={BottomStickyStyles.bottom_sticky_wrapper}>
      <SecondaryButton buttonText={secondaryButtonText}/>
      <PrimaryButton buttonText={primaryButtonText} />
    </div>
  )
}

export default BottomStickySection;