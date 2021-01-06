import React from "react";
import { Link } from "react-router-dom";
import arrLinkObjs from "./arrLinkObjs";

function arrLinks(arrIds, entityType, entities) {
  const linkObjs = arrLinkObjs(arrIds, entityType, entities);
  const links = linkObjs.map((obj) => (
    <Link key={obj.id} to={obj.url}>
      {obj.text}
    </Link>
  ));
  return links;
}

export default arrLinks;
