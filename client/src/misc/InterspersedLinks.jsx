import React from "react";
import { Link } from "react-router-dom";

const linkObj = (id, entityType, entities) => ({
  id,
  url: `/${entityType}/${id}`,
  text: entities[entityType][id].name,
});

const arrLinkObjs = (arrIds, entityType, entities) =>
  arrIds.map((id) => linkObj(id, entityType, entities));

const arrLinks = (arrIds, entityType, entities) => {
  const linkObjs = arrLinkObjs(arrIds, entityType, entities);
  const links = linkObjs.map((obj) => (
    <Link key={obj.id} to={obj.url}>
      {obj.text}
    </Link>
  ));
  return links;
};

const intersperse2 = (arr, separator, lastSeparator) => {
  if (arr.length === 0) {
    return [];
  }
  // separator = separator || ", ";
  // lastSeparator = lastSeparator || separator;

  const reducer = (acc, cur, idx, src) => {
    const sep = idx === src.length - 1 ? lastSeparator : separator;
    return acc.concat([sep, cur]);
  };

  return arr.slice(1).reduce(reducer, [arr[0]]);
};

function InterspersedLinks({ arrIds, entityType, entities }) {
  const links = arrLinks(arrIds, entityType, entities);
  const interspercedLinks = intersperse2(links, ", ", " & ");
  return <span className="InterspersedLinks">{interspercedLinks}</span>;
}

export default InterspersedLinks;
