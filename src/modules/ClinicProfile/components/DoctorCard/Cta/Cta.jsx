import React, { useCallback } from "react";

import AvailabilityInfo from "../AvailabilityInfo/AvailabilityInfo";

import ctaTypeEnums from "@/modules/ClinicProfile/constants/ctaTypeEnums";

import ScheduledConsultCtaContainer from "../ScheduledConsultCta/ScheduledConsultCtaContainer";
import OfflineBookCtaContainer from "../OfflineBookCta/OfflineBookCtaContainer";
import CallCtaContainer from "../CallCta/CallCtaContainer";

import "./Cta.scss";
import NoAppointment from "../NoAppointment/NoAppointment";

const getCtaByType = (type) => {
  switch (type) {
    case ctaTypeEnums.book:
    case ctaTypeEnums.rfa:
      return OfflineBookCtaContainer;

    case ctaTypeEnums.scheduled_consult:
      return ScheduledConsultCtaContainer;

    case ctaTypeEnums.call:
      return CallCtaContainer;

    default:
      return null;
  }
};

function Cta({
  cta_data_v2: ctaData = {},
  vn_phone_number: vnPhoneData = {},
  availabilityInfo = {},
}) {
  const { primary_cta: primaryCta = {}, secondary_cta: secondaryCta = {} } = ctaData || {};

  if (!primaryCta.type && !availabilityInfo.availability_text) {
    return null;
  }

  const primaryCtaProps = {
    type: 'primary',
    ctaText: primaryCta.cta_text,
    isDisabled: primaryCta.is_disabled,
    vnNumber: vnPhoneData.extension
      ? `${vnPhoneData.number},${vnPhoneData.extension}`
      : vnPhoneData.number,
  };

  const secondaryCtaProps = {
    type: 'secondary',
    ctaText: secondaryCta.cta_text,
    isDisabled: secondaryCta.is_disabled,
    vnNumber: vnPhoneData.extension
      ? `${vnPhoneData.number},${vnPhoneData.extension}`
      : vnPhoneData.number,
  };

  let PrimaryCta = null,
    SecondaryCta = null;

  if (primaryCta.type) {
    PrimaryCta = getCtaByType(ctaTypeEnums[primaryCta.type]);
  }

  if (secondaryCta.type) {
    SecondaryCta = getCtaByType(ctaTypeEnums[secondaryCta.type]);
  }

  if (!PrimaryCta && !SecondaryCta) {
    return <NoAppointment />;
  }

  let LayoutLeftComponent = () => {
    if (SecondaryCta) {
      return (
        <div className="doctor-cta__col">
          <AvailabilityInfo
            ctaType={secondaryCta.type}
            availabilityText={secondaryCta.availability_text}
          />
          <SecondaryCta {...secondaryCtaProps} />
        </div>
      );
    }

    return (
      <AvailabilityInfo
        ctaType={primaryCta.type}
        availabilityText={primaryCta.availability_text}
      />
    );
  };

  let LayoutRightComponent = useCallback(() => {
    if (SecondaryCta) {
      return (
        <div className="doctor-cta__col">
          <AvailabilityInfo ctaType={primaryCta.type} availabilityText={primaryCta.availability_text} />
          <PrimaryCta {...primaryCtaProps} />
        </div>
      );
    }

    return <PrimaryCta {...primaryCtaProps} />;
  }, [SecondaryCta, primaryCta, primaryCtaProps]);

  return (
    <div className="doctor-cta">
      {
        <div className="doctor-cta__row">
          <div className="doctor-cta__left">
            <LayoutLeftComponent />
          </div>
          <div className="doctor-cta__right">
            <LayoutRightComponent />
          </div>
        </div>
      }
    </div>
  );
}

export default Cta;
