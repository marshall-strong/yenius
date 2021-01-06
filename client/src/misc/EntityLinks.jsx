import React from "react";
import { Link } from "react-router-dom";

const linkToShowPage = (entityType, entityId, linkText) => {
  const showPageUrl = `/${entityType}/${entityId}`;
  return <Link to={showPageUrl}>{linkText}</Link>;
};

function EntityLinks(entities, entityType, arrayEntityIds) {
  const arrayLinks = arrayEntityIds.map((id) =>
    linkToShowPage(entityType, id, entities[entityType][id].name)
  );
  return arrayLinks;
}

export default EntityLinks;
