import React from 'react'
import Image from 'next/image'
import ClinicPhotoStyles from './ClinicPhoto.module.css'

function ClinicPhoto() {
  return (
    <div>
      <Image className={ClinicPhotoStyles.clinic_photo} src="/clinic_photo.png" width="100" height="168" />
    </div>
  )
}

export default ClinicPhoto