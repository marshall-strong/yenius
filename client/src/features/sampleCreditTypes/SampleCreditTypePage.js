import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectSampleCreditTypeById } from "../sampleCreditTypes/sampleCreditTypesSlice";

const SampleCreditTypePage = ({ match }) => {
  const { sampleCreditTypeId } = match.params;

  const sampleCreditType = useSelector((state) => selectSampleCreditTypeById(state, sampleCreditTypeId));

  if (!sampleCreditType) {
    return (
      <section>
        <h2>SampleCreditType not found!</h2>
        <Link to={`/sample_credit_types`} className="button muted-button">
          Back to SampleCreditTypes List
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h2>SampleCreditType {sampleCreditType.id}</h2>
      <p>id: {sampleCreditType.id}</p>
      <p>credit_type: {sampleCreditType.credit_type}</p>
      <p>description: {sampleCreditType.description}</p>
      <Link to={`/sample_credit_types`} className="button muted-button">
        Back to SampleCreditTypes List
      </Link>
    </section>
  );
};

export default SampleCreditTypePage;
