function linkObj(id, entityType, entities) {
  return {
    id,
    url: `/${entityType}/${id}`,
    text: entities[entityType][id].name,
  };
}

export default linkObj;
