import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectArtistCreditById } from "../artistCredits/artistCreditsSlice";

const ArtistCreditPage = ({ match }) => {
  const { artistCreditId } = match.params;

  const artistCredit = useSelector((state) =>
    selectArtistCreditById(state, artistCreditId)
  );

  if (!artistCredit) {
    return (
      <section>
        <h2>ArtistCredit not found!</h2>
        <Link to={`/artist_credits`} className="button muted-button">
          Back to ArtistCredits List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>ArtistCredit {artistCredit.id}</h2>
      <p>id: {artistCredit.id}</p>
      <p>artistId: {artistCredit.artistId}</p>
      <p>creditableType: {artistCredit.creditableType}</p>
      <p>creditableId: {artistCredit.creditableId}</p>
      <p>artistCreditTypeId: {artistCredit.artistCreditTypeId}</p>
      <Link to={`/artist_credits`} className="button muted-button">
        Back to ArtistCredits List
      </Link>
    </section>
  );
};

export default ArtistCreditPage;
