import React from 'react'
import DoctorList from './DoctorList'

import fetchClinicProfileData from '@/modules/ClinicProfile/utils/fetchClinicProfileData'
import getCtaAPIPayload from '../../utils/getCtaAPIPayload';
import normalizeEstablishmentRelations from '../../utils/normalizeEstablishmentRelations';

async function DoctorListContainer({
  routeInfo
}) {

  let data = await fetchClinicProfileData(routeInfo);
  const { establishmentProfile, establishmentRelations: { total_results_count, results = []} = {} } = data || {};

  let ctaAPIPayload = {doctors_info: getCtaAPIPayload(establishmentProfile, results), city: routeInfo.city}
  
  const normalizedRelations = normalizeEstablishmentRelations(results);

  return (
    <DoctorList
      initialRelations={normalizedRelations}
      establishmentProfile={establishmentProfile}
      totalCount={total_results_count}
      ctaAPIPayload={ctaAPIPayload}
    />
  );
}

export default DoctorListContainer