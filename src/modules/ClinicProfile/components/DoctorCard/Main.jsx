import React, { useContext } from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import LocationInfo from './LocationInfo/LocationInfo'
import ConsultationFees from './ConsultationFees/ConsultationFees';
import Cta from './Cta/CtaContainer';

import { getDoctorSpecialization } from '../../utils/getDoctorSpeciality'
import { EstablishmentProfileContext, EstablishmentRelationsContext, RelationItemContext } from '../../contexts';

import './Main.scss';

function Main({
  relationId,
}) {

  const establishmentProfile = useContext(EstablishmentProfileContext);
  const relations = useContext(EstablishmentRelationsContext);

  const { relation: { provider = {} } = {}, fees = [] } = relations.byIds[relationId] || {};

  const { name: { first_name } = {}, image_url, specializations = [], years_of_experience, feedback: { reviews_count } = {},
  external_data: { recommendation : { recommendation_percent } = {}} = {} } = provider;
  
  const { address: { locality: { name: localityName } = {}} = {}, name: establishmentName  } = establishmentProfile;

  return (
    <div className='doctor-card' id={relationId}>
      <ProfileInfo 
        name= {first_name}
        image_url={image_url || '/images/default-doctor.png'}
        speciality={getDoctorSpecialization(specializations)}
        years_of_experience={years_of_experience}
        reviews_count={reviews_count}
        recommendation_percent={recommendation_percent}
      />
      <LocationInfo
        localityName={localityName}
        establishmentName={establishmentName}
      />
      <ConsultationFees 
        amount={fees?.[0]?.amount}
      />
      <RelationItemContext.Provider value={relations.byIds[relationId] || {}}>
        <Cta
          relationId={relationId} 
        />
      </RelationItemContext.Provider>
    </div>
  )
}

export default Main