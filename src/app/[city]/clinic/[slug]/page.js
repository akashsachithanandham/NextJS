
import React from 'react'
import BottomStickySection from '@/modules/ClinicProfile/components/BottomStickySection'
import PatientStories from '@/modules/ClinicProfile/components/PatientStories'


function ClinicProfilePage({params, searchParams}) {

  const routeInfo = {
    ...params,
    searchParams
  }
  return (
    <div>
      <PatientStories routeInfo={routeInfo} />
      <BottomStickySection routeInfo={routeInfo} />
    </div>
    
  )
}

export default ClinicProfilePage