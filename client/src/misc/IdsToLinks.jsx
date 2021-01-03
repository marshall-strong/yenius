import React from "react";
import { Link } from "react-router-dom";

function IdsToLinks({ arrIds, entityType, entities }) {
  const makeLink = (id) => {
    const url = `/${entityType}/${id}`;
    const linkText = entities[entityType][id].name;
    const link = <Link to={url}>{linkText}</Link>;
    //
    return link;
  };

  const reducer = (accum, currentId) => accum + "##" + makeLink(currentId);

  let links = arrIds.reduce(reducer);
  //
  return <span>{links}</span>;
}

export default IdsToLinks;
