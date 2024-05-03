import React, { useEffect, useState } from "react";

import {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
} from "../store/action";
import { connect } from "react-redux";
import fetchJobs from "../api/fetchJobs";

function LandingPage({
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
}: any) {
  useEffect(() => {
    fetchJobs({ limit: 10, offset: 0 })
      .then((data) => {
        fetchJobBoardSuccess(data);
      })
      .catch((err) => {
        fetchJobBoardFailure(err);
      });
  }, []);

  return (
    <div>
      <h1>LAndinggg</h1>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  jobBoardData: state.jobBoardData,
});

const mapDispatchToProps = {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
