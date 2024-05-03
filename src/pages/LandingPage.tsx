import React, { useEffect, useState } from "react";

import {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
} from "../store/action";
import { connect } from "react-redux";
import fetchJobs from "../api/fetchJobs";
import { JobCard } from "../components";
import { IJobCard } from "../types";
import "./LandingPageStyles.css";

function LandingPage({
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
  jobBoardData,
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
      <div className="job-list">
        {jobBoardData &&
          jobBoardData.map((job: IJobCard) => (
            <JobCard
              companyName={job.companyName}
              jdLink={job.jdLink}
              jdUid={job.jdUid}
              jobDetailsFromCompany={job.jobDetailsFromCompany}
              jobRole={job.jobRole}
              location={job.location}
              logoUrl={job.logoUrl}
              maxExp={job.maxExp}
              maxJdSalary={job.maxJdSalary}
              minExp={job.minExp}
              minJdSalary={job.minJdSalary}
              salaryCurrencyCode={job.salaryCurrencyCode}
            />
          ))}
      </div>
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
