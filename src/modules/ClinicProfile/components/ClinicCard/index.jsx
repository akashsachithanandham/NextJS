import React, { Fragment } from 'react'
import ClinicPhoto from './ClinicPhoto'
import ClinicDetails from './ClinicDetails'
import SlotDetails from '@/modules/Common/components/SlotDetails'

import ClinicCardStyles from './index.module.css';
import fetchClinicProfileData from '../../utils/fetchClinicProfileData';

async function ClinicCard({ routeInfo }) {

  const clinicProfileDetails = await fetchClinicProfileData(routeInfo);

  console.log('============> ', clinicProfileDetails);

  const getProfileLogo = () => {
    console.log('=========> res', clinicProfileDetails.formData);
  }

  getProfileLogo();

  return (
    <Fragment>
      <ClinicPhoto />
      <ClinicDetails />
      <SlotDetails />
      <div className={ClinicCardStyles.c_divider} />
    </Fragment>
  )
}

export default ClinicCard