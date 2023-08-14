"use client";

import React, { useCallback, useContext, useState } from "react";
import useSWR from 'swr';

import { DoctorCard } from "../DoctorCard";

import fetchCtaInfo from "../../utils/fetchCtaInfo";

import {
  DoctorCtaContext,
  EstablishmentProfileContext,
  EstablishmentRelationsContext,
} from "../../contexts";

import SeeAllCta from '../SeeAllCta/Main';
import normalizeCtaData from "../../utils/normalizeCtaData";

import { BottomModal } from "@/modules/Common/components/Modal";
import InfiniteDoctorList from "../InfiniteDoctorList/Main";

import "./DoctorList.scss";

const DOCTORS_COUNT_OFFSET = 10;

function DoctorList({
  establishmentProfile = {},
  initialRelations = {},
  totalCount,
  ctaAPIPayload = {},
}) {

  const [ seeAllDoctors, setSeeAllDoctors ] = useState(false);
  
  let ctaFetcher = fetchCtaInfo(ctaAPIPayload);

  const { data: ctaData, isLoading: isCtaAPILoading } = useSWR(
    "/marketplace-api/mweb/provider/cta-info",
    ctaFetcher
  );

  const ctaContext = {
    isLoading: isCtaAPILoading,
    data: !isCtaAPILoading ? normalizeCtaData(ctaData?.booking_info) : {}
  }

  const handleSeeAllCta = useCallback(() => {
    setSeeAllDoctors(true);
  }, [])

  return (
    <EstablishmentProfileContext.Provider value={establishmentProfile}>
      <EstablishmentRelationsContext.Provider value={initialRelations}>
        <DoctorCtaContext.Provider value={ctaContext}>
          <div className="doctor-list">
            {initialRelations.allIds.map((id, index) => (
              <div key={id}>
                <DoctorCtaContext.Provider value={ctaContext}>
                  <DoctorCard relationId={id} />
                </DoctorCtaContext.Provider>
                {index < initialRelations.allIds.length - 1 ? (
                  <div className="doctor-list__divider" />
                ) : null}
              </div>
            ))}
            {totalCount > DOCTORS_COUNT_OFFSET ? (
              <div className="see-all-cta-wrapper">
                <SeeAllCta
                  onClick={handleSeeAllCta}
                  ctaText="See All Doctors"
                />
              </div>
            ) : null}
            <BottomModal isOpen={seeAllDoctors}>
              <div style={{ maxHeight: "700px" }}>
                <InfiniteDoctorList
                  establishmentProfile={establishmentProfile}
                  ctaContext={ctaContext}
                  initialRelations={initialRelations}
                />
              </div>
            </BottomModal>
          </div>
        </DoctorCtaContext.Provider>
      </EstablishmentRelationsContext.Provider>
    </EstablishmentProfileContext.Provider>
  );
}

export default DoctorList;
