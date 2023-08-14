import React, { useCallback } from 'react'
import ScheduledConsultCta from './ScheduledConsultCta'
import { RelationItemContext } from '@/modules/ClinicProfile/contexts';
import { useRouter, useParams } from 'next/navigation'

function ScheduledConsultCtaContainer({
  type,
  ctaText,
  isDisabled
}) {

  const { push } = useRouter();
  const params = useParams();
  
  const city = params.city
  const { relation: { fabric_id, provider: { slug } = {} } = {} } = useContext(RelationItemContext) ?? {};

  const handleClick = useCallback(() => {
    push(`/${city}/doctor/${slug}/${fabric_id}/onlineconsult/slots`)
  }, [slug, fabric_id])

  return (
    <ScheduledConsultCta
      type={type}
      ctaText={ctaText}
      isDisabled={isDisabled}
      onClick={handleClick}
    />
  )
}

export default ScheduledConsultCtaContainer