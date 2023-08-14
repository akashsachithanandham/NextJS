function normalizeEstablishmentRelations(items = []) {

  let allIds = [];

  let byIds =  items.reduce((normalizedObj, item) => {
    normalizedObj[item.relation.fabric_id] = item;

    allIds.push(item.relation.fabric_id)

    return normalizedObj;
  }, {})

  return {
    allIds,
    byIds
  }
}

export default normalizeEstablishmentRelations;