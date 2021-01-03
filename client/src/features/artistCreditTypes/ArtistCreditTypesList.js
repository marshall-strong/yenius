import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchArtistCreditTypes } from "../artistCreditTypes/artistCreditTypesAsyncThunks"
import { selectArtistCreditTypeIds, selectArtistCreditTypeById } from "./artistCreditTypesSlice";

const ArtistCreditTypesListItem = ({ artistCreditTypeId }) => {
  const artistCreditType = useSelector((state) =>
    selectArtistCreditTypeById(state, artistCreditTypeId)
  );
  return (
    <article className="list-item" key={artistCreditType.id}>
      <h3>ArtistCreditType {artistCreditType.id}</h3>
      <p>id: {artistCreditType.id}</p>
      <p>credit_type: {artistCreditType.credit_type}</p>
      <p>description: {artistCreditType.description}</p>
      <Link
        to={`/artist_credit_types/${artistCreditType.id}`}
        className="button muted-button"
      >
        View ArtistCreditType
      </Link>
    </article>
  );
};

const ArtistCreditTypesList = () => {
  const dispatch = useDispatch();
  const artistCreditTypeIds = useSelector(selectArtistCreditTypeIds);
  const artistCreditTypesStatus = useSelector(
    (state) => state.artistCreditTypes.status
  );
  const error = useSelector((state) => state.artistCreditTypes.error);

  useEffect(() => {
    if (artistCreditTypesStatus === "idle") {
      dispatch(fetchArtistCreditTypes());
    }
  }, [artistCreditTypesStatus, dispatch]);

  let content;

  if (artistCreditTypesStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (artistCreditTypesStatus === "succeeded") {
    content = artistCreditTypeIds.map((artistCreditTypeId) => (
      <ArtistCreditTypesListItem
        key={artistCreditTypeId}
        artistCreditTypeId={artistCreditTypeId}
      />
    ));
  } else if (artistCreditTypesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>ArtistCreditTypes</h2>
      {content}
    </section>
  );
};

export default ArtistCreditTypesList;
