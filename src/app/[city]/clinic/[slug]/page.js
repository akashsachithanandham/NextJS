import ClinicCard from '@/modules/ClinicProfile/components/ClinicCard'
import React from 'react'
import BottomStickySection from '@/modules/ClinicProfile/components/BottomStickySection'


function ClinicProfilePage({params, searchParams}) {

  const routeInfo = {
    ...params,
    searchParams
  }
  return (
    <div>
      <ClinicCard routeInfo={routeInfo}/>
      <BottomStickySection routeInfo={routeInfo} />
    </div>
    
  )
}

export default ClinicProfilePage