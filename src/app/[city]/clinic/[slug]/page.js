import ClinicCard from '@/modules/ClinicProfile/components/ClinicCard'
import React from 'react'
import BottomStickySection from '@/modules/ClinicProfile/components/BottomStickySection'
import DoctorListContainer from '@/modules/ClinicProfile/components/DoctorList/DoctorListContainer'

import ServerHydraterContainer from '@/modules/ClinicProfile/components/ServerHydraterContainer'
import FaqsContainer from '@/modules/ClinicProfile/components/Faqs/FaqsContainer'

function ClinicProfilePage({params, searchParams}) {

  const routeInfo = {
    ...params,
    searchParams
  }
  return (
    <div>
      <ServerHydraterContainer routeInfo={routeInfo} />
      <ClinicCard routeInfo={routeInfo}/>
      {/* <BottomStickySection routeInfo={routeInfo} /> */}
      <DoctorListContainer routeInfo={routeInfo} />
      <FaqsContainer routeInfo={routeInfo} />
    </div>
    
  )
}

export default ClinicProfilePage