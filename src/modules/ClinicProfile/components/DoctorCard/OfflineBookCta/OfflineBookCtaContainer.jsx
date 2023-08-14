import React, { useCallback, useContext } from 'react'
import OfflineBookCta from './OfflineBookCta'
import { RelationItemContext } from '@/modules/ClinicProfile/contexts';
import { useSearchParams, useRouter, useParams } from 'next/navigation'

function OfflineBookCtaContainer({
  type,
  ctaText,
  isDisabled
}) {

  const { push } = useRouter();
  const query = useSearchParams()
  const params = useParams();

  const queryEncoded = new URLSearchParams(query).toString();
  
  const city = params.city
  const { relation: { fabric_id, provider: { slug } = {} } = {} } = useContext(RelationItemContext) ?? {};

  const handleClick = useCallback(() => {
    push(`/${city}/doctor/${slug}/${fabric_id}/book?${queryEncoded}&selected_day=today`)
  }, [slug, fabric_id])

  return (
    <OfflineBookCta 
      type={type}
      ctaText={ctaText}
      isDisabled={isDisabled}
      onClick={handleClick}
    />
  )
}

export default OfflineBookCtaContainer