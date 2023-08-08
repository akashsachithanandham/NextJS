import Image from 'next/image';
import ClinicDetailsStyles from './ClinicDetails.module.scss';

function ClinicDetails() {
  return (
    <div className={ClinicDetailsStyles.c_clinic_details}>
      <div className={ClinicDetailsStyles.c_clinic_details_content}>
        <h1 className={ClinicDetailsStyles.c_clinic_details_header}>Smilecure Multispeciality</h1>
        <p className={ClinicDetailsStyles.c_clinic_details_subhead}>Multi Speciality Hospital</p>
        <div className={ClinicDetailsStyles.c_clinic_details_address_section}>
          <div className={ClinicDetailsStyles.c_clinic_details_address}>
            No. 3rd floor, L-167, Sector 6, Outer Ring Road, HSR Layout, Bangalore, Karnataka, Landmark: Focus Diagnostics, Bangalore
          </div>
          <a
          href={`https://www.google.com/maps/dir/?api=1&destination=12.89,77.612`}
          target="_blank"
          data-qa-id="google_maps"
        >
          <div className={ClinicDetailsStyles.c_clinic_details_direction}>Get Direction</div>
        </a>
        </div>
      </div>
      <div className={ClinicDetailsStyles.c_clinic_details_reviews}>
        <div className={ClinicDetailsStyles.c_clinic_details_rating}>
          <Image className={ClinicDetailsStyles.c_clinic_details_star} src="/Star.svg" width="16" height="16" />
          <span className={ClinicDetailsStyles.c_clinic_details_rate}>4.8</span>
        </div>
        <div className={ClinicDetailsStyles.c_clinic_details_review_count}>280</div>
        <div className={ClinicDetailsStyles.c_clinic_details_review_text}>Rating</div>
      </div>
    </div>
  );
}

export default ClinicDetails;
