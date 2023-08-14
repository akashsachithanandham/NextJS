function normalizeCtaData(items = []) {

  let allIds = [];

  let byIds =  items.reduce((normalizedObj, item) => {
    // relation_id --> relation fabric id
    normalizedObj[item.relation_id] = item;

    allIds.push(item.relation_id)

    return normalizedObj;
  }, {})

  return {
    allIds,
    byIds
  }
}

export default normalizeCtaData;