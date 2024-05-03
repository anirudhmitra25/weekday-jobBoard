import React, { useEffect, useState, useRef } from "react";
import {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
} from "../store/action";
import { connect } from "react-redux";
import fetchJobs from "../api/fetchJobs";
import { JobCard, Filters } from "../components";
import { IJobCard } from "../types";
import "./LandingPageStyles.css";
import { Triangle } from "react-loader-spinner";

function LandingPage({
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
  jobBoardData,
}: any) {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    fetchJobs({ limit: 10, offset: 0 })
      .then((data) => {
        fetchJobBoardSuccess(data);
      })
      .catch((err) => {
        fetchJobBoardFailure(err);
      });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setLoading(true);
        fetchNextData();
      }
    });

    if (observer.current) {
      observer.current.observe(document.querySelector(".loader")!);
    }

    return () => observer.current!.disconnect();
  }, [loading, hasMore]);

  const fetchNextData = () => {
    const currentLength = jobBoardData.length;
    fetchJobs({ limit: 10, offset: currentLength })
      .then((data) => {
        if (data.length === 0) {
          setHasMore(false);
        } else {
          fetchJobBoardSuccess([...jobBoardData, ...data]);
        }
      })
      .catch((err) => {
        fetchJobBoardFailure(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="filters">
        <Filters />
      </div>
      <div className="job-list">
        {jobBoardData &&
          jobBoardData.map((job: IJobCard) => (
            <JobCard
              key={job.jdUid}
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

      {loading && (
        <div className="loader">
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="loader"></div>
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
