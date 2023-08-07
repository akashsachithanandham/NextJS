import React from 'react'
import './index.scss'
import HeaderComponent from './HeaderComponent'

function PatientStories({routeInfo}) {
  return (
    <div className='patient-stories-wrapper'>
      <HeaderComponent routeInfo={routeInfo} />
    </div>
  )
}

export default PatientStories