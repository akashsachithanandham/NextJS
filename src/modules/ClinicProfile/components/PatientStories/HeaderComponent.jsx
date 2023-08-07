import React from 'react'
import './HeaderComponent.scss'
import fetchClinicProfileData from '../../utils/fetchClinicProfileData';

function HeaderComponent({routeInfo}) {

  const clinicProfileDetails = fetchClinicProfileData(routeInfo);



//   const subHeading = "These stories represent patient opinions and experiences. They do not reflect the doctor's medical capabilities." +
// `No Feedbacks available for ${doctor_name}. Be the first one to give feedback to the doctor.`;
  return (
    <>
      <p className='header'>
        Patient Stories
      </p>
      <p className='subheader'>

      </p>
      
    </>
  )
}

export default HeaderComponent