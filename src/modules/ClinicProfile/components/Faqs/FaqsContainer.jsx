import React from 'react'

import fetchClinicProfileData from '@/modules/ClinicProfile/utils/fetchClinicProfileData'
import Faqs from './Faqs';

async function FaqsContainer({routeInfo}) {

  let { establishmentFAQ: { count, questions } = {} } = await fetchClinicProfileData(routeInfo) || {};

  return (
    <Faqs
      title={'Frequently Asked Questions'}
      itemsCount={count}
      items={questions}
    />
  )
}

export default FaqsContainer