import linkObj from './linkObj';

function arrLinkObjs(arrIds, entityType, entities) {
  return arrIds.map((id) => linkObj(id, entityType, entities));
}

export default arrLinkObjs;
