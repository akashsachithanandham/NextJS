import React from 'react'
import NavBar from '@/modules/Common/components/NavBar'
import ClinicCard from '@/modules/ClinicProfile/components/ClinicCard'
import BottomStickySection from '@/modules/ClinicProfile/components/BottomStickySection'

function ClinicProfilePage({params, searchParams}) {

  const routeInfo = {
    ...params,
    searchParams
  }
  return (
    <div>
      <NavBar />
      <ClinicCard routeInfo={routeInfo}/>
      <BottomStickySection routeInfo={routeInfo} />
    </div>
    
  )
}

export default ClinicProfilePage