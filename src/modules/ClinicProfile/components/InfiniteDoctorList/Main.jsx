import React, { useRef, useEffect, useMemo, useCallback, useState } from "react";
import useSWR from "swr";

import { DoctorCard } from "../DoctorCard";

import useVisibilitySensor from "@/modules/Common/components/useVisibilitySensor/Main";

import fetchEstablishmentRelations from "../../utils/fetchEstablishmentRelations";
import normalizeEstablishmentRelations from "../../utils/normalizeEstablishmentRelations";

import {
  DoctorCtaContext,
  EstablishmentProfileContext,
  EstablishmentRelationsContext,
} from "../../contexts";

const RESULTS_PER_PAGE = 10;

function Main({
  establishmentProfile = {},
  ctaContext = {},
  initialRelations = {}
}) {

  const targetRef = useRef(null);

  const { isIntersecting } = useVisibilitySensor({ targetRef });

  const [ relationsAPIStatus, setRelationsAPIStatus ] = useState({ page: 0, infiniteList: initialRelations, 
    fetchItems: false, totalResults: 0 })

  const { slug, address: { city : { city_name  } = {} } = {} } = establishmentProfile || {};

  const {
    data: relations,
    isLoading,
  } = useSWR(
    isIntersecting && relationsAPIStatus.fetchItems ? 
      `/marketplace-api/mweb/profile/establishment/relations?page=${relationsAPIStatus.page + 1}` : null,
    fetchEstablishmentRelations({
      slug,
      city: city_name
    })
  );


  let normalizedRelations = useMemo(() => normalizeEstablishmentRelations(relations?.results), [relations])

  useEffect(() => {
    if(normalizedRelations.allIds.length) {
      setRelationsAPIStatus({
        ...relationsAPIStatus,
        fetchItems: false,
        page: relationsAPIStatus.page + 1,
        infiniteList: {
          byIds: {
            ...relationsAPIStatus.infiniteList.byIds,
            ...normalizedRelations.byIds,
          },
          allIds: [
            ...relationsAPIStatus.infiniteList.allIds,
            ...normalizedRelations.allIds,
          ],
        },
        totalResults: relations?.total_results_count
      });
    }
  
  }, [normalizedRelations])


  useEffect(() => {

    if(isIntersecting && !isLoading && !normalizedRelations.allIds.length && 
      ( (relationsAPIStatus.page + 1) <=  Math.floor(relationsAPIStatus.totalResults / RESULTS_PER_PAGE)  || 
      relationsAPIStatus.page === 0) ) {
      setRelationsAPIStatus({
        ...relationsAPIStatus,
        fetchItems: true
      });
    }
  }, [isIntersecting, isLoading, normalizedRelations])

  return (
    <EstablishmentProfileContext.Provider value={establishmentProfile}>
      <EstablishmentRelationsContext.Provider value={relationsAPIStatus.infiniteList}>
        <DoctorCtaContext.Provider value={ctaContext}>
          {relationsAPIStatus.infiniteList.allIds.map((id, index) => (
            <div key={id} id={id}>
              <DoctorCard key={id} relationId={id} />
              {index < relationsAPIStatus.infiniteList.allIds.length - 1 ? (
                <div className="doctor-list__divider" />
              ) : null}
            </div>
          ))}
        </DoctorCtaContext.Provider>
      </EstablishmentRelationsContext.Provider>
      <div id="doctor-list-ref" ref={targetRef}></div>
    </EstablishmentProfileContext.Provider>
  );
}

export default Main;
