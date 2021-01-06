import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSampleCreditTypes } from "./sampleCreditTypesAsyncThunks";
import {
  selectSampleCreditTypeIds,
  selectSampleCreditTypeById,
} from "./sampleCreditTypesSlice";

const SampleCreditTypesListItem = ({ sampleCreditTypeId }) => {
  const sampleCreditType = useSelector((state) =>
    selectSampleCreditTypeById(state, sampleCreditTypeId)
  );
  return (
    <article className="list-item" key={sampleCreditType.id}>
      <h3>SampleCreditType {sampleCreditType.id}</h3>
      <p>id: {sampleCreditType.id}</p>
      <p>credit_type: {sampleCreditType.credit_type}</p>
      <p>description: {sampleCreditType.description}</p>
      <Link
        to={`/sample_credit_types/${sampleCreditType.id}`}
        className="button muted-button"
      >
        View SampleCreditType
      </Link>
    </article>
  );
};

const SampleCreditTypesList = () => {
  const dispatch = useDispatch();
  const sampleCreditTypeIds = useSelector(selectSampleCreditTypeIds);
  const sampleCreditTypesStatus = useSelector(
    (state) => state.sampleCreditTypes.status
  );
  const error = useSelector((state) => state.sampleCreditTypes.error);

  useEffect(() => {
    if (sampleCreditTypesStatus === "idle") {
      dispatch(fetchSampleCreditTypes());
    }
  }, [sampleCreditTypesStatus, dispatch]);

  let content;

  if (sampleCreditTypesStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (sampleCreditTypesStatus === "succeeded") {
    content = sampleCreditTypeIds.map((sampleCreditTypeId) => (
      <SampleCreditTypesListItem
        key={sampleCreditTypeId}
        sampleCreditTypeId={sampleCreditTypeId}
      />
    ));
  } else if (sampleCreditTypesStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="list-list">
      <h2>SampleCreditTypes</h2>
      {content}
    </section>
  );
};

export default SampleCreditTypesList;
