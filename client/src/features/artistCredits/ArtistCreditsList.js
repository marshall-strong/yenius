import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchArtistCredits } from "./artistCreditsAsyncThunks";
import {
  selectArtistCreditIds,
  selectArtistCreditById,
} from "./artistCreditsSlice";

const ArtistCreditsListItem = ({ artistCreditId }) => {
  const artistCredit = useSelector((state) =>
    selectArtistCreditById(state, artistCreditId)
  );
  return (
    <article className="list-item" key={artistCredit.id}>
      <h3>ArtistCredit {artistCredit.id}</h3>
      <p>id: {artistCredit.id}</p>
      <p>artistId: {artistCredit.artistId}</p>
      <p>creditableType: {artistCredit.creditableType}</p>
      <p>creditableId: {artistCredit.creditableId}</p>
      <p>artistCreditTypeId: {artistCredit.artistCreditTypeId}</p>
      <Link
        to={`/artist_credits/${artistCredit.id}`}
        className="button muted-button"
      >
        View ArtistCredit
      </Link>
    </article>
  );
};

const ArtistCreditsList = () => {
  const dispatch = useDispatch();
  const artistCreditIds = useSelector(selectArtistCreditIds);
  const artistCreditsStatus = useSelector(
    (state) => state.artistCredits.status
  );
  const error = useSelector((state) => state.artistCredits.error);

  useEffect(() => {
    if (artistCreditsStatus === "idle") {
      dispatch(fetchArtistCredits());
    }
  }, [artistCreditsStatus, dispatch]);

  let content;

  if (artistCreditsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (artistCreditsStatus === "succeeded") {
    content = artistCreditIds.map((artistCreditId) => (
      <ArtistCreditsListItem
        key={artistCreditId}
        artistCreditId={artistCreditId}
      />
    ));
  } else if (artistCreditsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>ArtistCredits</h2>
      {content}
    </section>
  );
};

export default ArtistCreditsList;
