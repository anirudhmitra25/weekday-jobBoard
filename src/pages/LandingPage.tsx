import React, { useEffect, useState, useRef } from "react";
import {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
  setFilter,
} from "../store/action";
import { connect } from "react-redux";
import fetchJobs from "../api/fetchJobs";
import { JobCard, Filters } from "../components";
import { Ifilter, IJobCard } from "../types";
import "./LandingPageStyles.css";
import { Triangle } from "react-loader-spinner";

interface ILandingPage {
  filters: Ifilter;
  jobBoardData: Array<IJobCard>;
  setFilter: any;
  fetchJobBoardRequest: any;
  fetchJobBoardSuccess: any;
  fetchJobBoardFailure: any;
}

function LandingPage({
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
  jobBoardData,
  setFilter,
  filters,
}: ILandingPage) {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filteredData, setFilteredData] = useState<IJobCard[]>([]);
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

  useEffect(() => {
    if (!jobBoardData) {
      return;
    }
    let finalData = jobBoardData;
    if (filters.companyName !== "") {
      let filteredList = jobBoardData.filter((job) => {
        return job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase());
      });
      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }
    if (filters.minExperience !== null) {
      let filteredList = jobBoardData.filter((job) => {
        return job.minExp >= filters.minExperience;
      });
      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }
    if (filters.minBasePay !== null) {
      let filteredList = jobBoardData.filter((job) => {
        return job.minJdSalary >= filters.minBasePay;
      });
      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }
    if (filters.location !== "") {
      let filteredList = jobBoardData.filter((job) => {
        return job.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());
      });
      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }

    if (filters.techStack?.length > 0) {
      let filteredList = jobBoardData.filter((job) => {
        return filters.techStack.some((tech) =>
          job.jobRole.toLowerCase().includes(tech.toLowerCase())
        );
      });

      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }

    if (filters.role?.length > 0) {
      let filteredList = jobBoardData.filter((job) => {
        return filters.role.some((role) =>
          job.jobRole.toLowerCase().includes(role.toLowerCase())
        );
      });

      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }

    if (filters.remoteOnSite?.length > 0) {
      let filteredList = jobBoardData.filter((job) => {
        return filters.remoteOnSite.some((preference) =>
          preference.toLowerCase() === "remote"
            ? job.location.toLowerCase().includes(preference.toLowerCase())
            : true
        );
      });

      let tempArray = finalData.filter((ele) => {
        return filteredList.includes(ele);
      });
      finalData = tempArray;
    }

    setFilteredData(finalData);
  }, [filters, jobBoardData]);

  return (
    <div className="container">
      <div className="filters">
        <Filters filters={filters} setFilter={setFilter} />
      </div>
      <div className="job-list">
        {filteredData.length > 0 &&
          filteredData.map((job: IJobCard) => (
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
  filters: state.filters,
});

const mapDispatchToProps = {
  fetchJobBoardRequest,
  fetchJobBoardSuccess,
  fetchJobBoardFailure,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
