import React, { Fragment } from 'react'
import Image from 'next/image'
import ClinicPhotoStyles from './ClinicPhoto.module.css'

function ClinicPhoto() {
  return (
    <Fragment>
      <Image className={ClinicPhotoStyles.clinic_photo} src="/clinic_photo.png" width="100" height="168" alt='clinic_photo' />
      <Image className={ClinicPhotoStyles.clinic_profile} src="https://images1-fabric.practo.com/practices/1276283/smiles-institute-of-gastroenterology-llp-bangalore-5e2ed9d449290.JPG" width="100" height="100" alt='clinic_profile' />
    </Fragment>
  );
}

export default ClinicPhoto