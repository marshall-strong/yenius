import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSampleCreditById } from "../sampleCredits/sampleCreditsSlice";

const SampleCreditPage = ({ match }) => {
  const { sampleCreditId } = match.params;

  const sampleCredit = useSelector((state) =>
    selectSampleCreditById(state, sampleCreditId)
  );

  if (!sampleCredit) {
    return (
      <section>
        <h2>SampleCredit not found!</h2>
        <Link to={`/sample_credits`} className="button muted-button">
          Back to SampleCredits List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>SampleCredit {sampleCredit.id}</h2>
      <p>id: {sampleCredit.id}</p>
      <p>parentSongId: {sampleCredit.parentSongId}</p>
      <p>childSongId: {sampleCredit.childSongId}</p>
      <p>sampleCreditTypeId: {sampleCredit.sampleCreditTypeId}</p>
      <Link to={`/sample_credits`} className="button muted-button">
        Back to SampleCredits List
      </Link>
    </section>
  );
};

export default SampleCreditPage;
