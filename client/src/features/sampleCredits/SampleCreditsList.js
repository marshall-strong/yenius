import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSampleCredits } from "./sampleCreditsAsyncThunks";
import {
  selectSampleCreditIds,
  selectSampleCreditById,
} from "./sampleCreditsSlice";

const SampleCreditsListItem = ({ sampleCreditId }) => {
  const sampleCredit = useSelector((state) =>
    selectSampleCreditById(state, sampleCreditId)
  );
  return (
    <article className="list-item" key={sampleCredit.id}>
      <h3>SampleCredit {sampleCredit.id}</h3>
      <p>id: {sampleCredit.id}</p>
      <p>parentSongId: {sampleCredit.parentSongId}</p>
      <p>childSongId: {sampleCredit.childSongId}</p>
      <p>sampleCreditTypeId: {sampleCredit.sampleCreditTypeId}</p>
      <Link
        to={`/sample_credits/${sampleCredit.id}`}
        className="button muted-button"
      >
        View SampleCredit
      </Link>
    </article>
  );
};

const SampleCreditsList = () => {
  const dispatch = useDispatch();
  const sampleCreditIds = useSelector(selectSampleCreditIds);
  const sampleCreditsStatus = useSelector(
    (state) => state.sampleCredits.status
  );
  const error = useSelector((state) => state.sampleCredits.error);

  useEffect(() => {
    if (sampleCreditsStatus === "idle") {
      dispatch(fetchSampleCredits());
    }
  }, [sampleCreditsStatus, dispatch]);

  let content;

  if (sampleCreditsStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (sampleCreditsStatus === "succeeded") {
    content = sampleCreditIds.map((sampleCreditId) => (
      <SampleCreditsListItem
        key={sampleCreditId}
        sampleCreditId={sampleCreditId}
      />
    ));
  } else if (sampleCreditsStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>SampleCredits</h2>
      {content}
    </section>
  );
};

export default SampleCreditsList;
