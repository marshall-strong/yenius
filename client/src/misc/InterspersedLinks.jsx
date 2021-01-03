import React from "react";
import arrLinks from "../helpers/arrLinks";
import intersperse from "../helpers/intersperse2";

function InterspersedLinks({ arrIds, entityType, entities }) {
  const links = arrLinks(arrIds, entityType, entities);
  const interspercedLinks = intersperse(links, ", ", " & ");
  return (<span className="InterspersedLinks">{interspercedLinks}</span>);
}

export default InterspersedLinks;
