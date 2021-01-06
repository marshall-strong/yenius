import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectArtistCreditTypeById } from "../artistCreditTypes/artistCreditTypesSlice";

const ArtistCreditTypePage = ({ match }) => {
  const { artistCreditTypeId } = match.params;

  const artistCreditType = useSelector((state) =>
    selectArtistCreditTypeById(state, artistCreditTypeId)
  );

  if (!artistCreditType) {
    return (
      <section>
        <h2>ArtistCreditType not found!</h2>
        <Link to={`/artist_credit_types`} className="button muted-button">
          Back to ArtistCreditTypes List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>ArtistCreditType {artistCreditType.id}</h2>
      <p>id: {artistCreditType.id}</p>
      <p>credit_type: {artistCreditType.credit_type}</p>
      <p>description: {artistCreditType.description}</p>
      <Link to={`/artist_credit_types`} className="button muted-button">
        Back to ArtistCreditTypes List
      </Link>
    </section>
  );
};

export default ArtistCreditTypePage;
