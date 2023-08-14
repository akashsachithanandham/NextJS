import React from 'react'
import fetchClinicProfileData from '../utils/fetchClinicProfileData'
import ServerStateHydrater from '../../Common/components/ServerHydrater/ServerStateHydrater';

async function ServerHydraterContainer({routeInfo}) {

  let profileData = await fetchClinicProfileData(routeInfo);

  return (
      <ServerStateHydrater 
        dataKey='establishmentProfile'
        data={profileData}
      />
  )
}

export default ServerHydraterContainer