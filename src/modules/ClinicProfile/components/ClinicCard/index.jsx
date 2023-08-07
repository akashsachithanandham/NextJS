import React, { Fragment } from 'react'
import ClinicPhoto from './ClinicPhoto'
import ClinicDetails from './ClinicDetails'
import SlotDetails from '@/modules/Common/components/SlotDetails'

import ClinicCardStyles from './index.module.css';

function ClinicCard() {
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