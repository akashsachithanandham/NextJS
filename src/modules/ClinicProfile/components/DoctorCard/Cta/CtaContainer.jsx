import React, { useContext } from 'react';

import Cta from './Cta'
import { DoctorCtaContext } from '@/modules/ClinicProfile/contexts';

function CtaContainer({
  relationId
}) {

  let { isLoading, data } = useContext(DoctorCtaContext);
  
  if(isLoading) {
    return 'Loading CTA'
  }
  
  let ctaInfo = data?.byIds[relationId] ?? {};

  return (
    <Cta 
      {...ctaInfo}
    />
  )
}

export default CtaContainer