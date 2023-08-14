function getCtaAPIPayload(establishmentProfile, relations) {
  return relations.map((item) => {
    return {
      fabric_doctor_id: item.relation.provider.fabric_id,
      fabric_practice_id: establishmentProfile.fabric_id,
      fabric_relation_id: item.relation.fabric_id
    }
  })
}

export default getCtaAPIPayload;