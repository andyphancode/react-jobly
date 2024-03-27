import React from "react";
import JobCard from "./JobCard";

/**
 * 
 * Job card list containing job cards holding job details. Contains an apply button for each card.
 * 
 */

function JobCardList({ jobs }) {
  
    return (
        <div className="JobCardList">
          {jobs.map(job => (
              <JobCard
                  key={job.id}
                  id={job.id}
                  title={job.title}
                  salary={job.salary}
                  equity={job.equity}
                  companyName={job.companyName}
              />

          ))}
        </div>
    );
}
  
export default JobCardList;