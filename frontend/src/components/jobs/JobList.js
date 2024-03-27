import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import JoblyApi from '../../api/api';
import JobCardList from "./JobCardList";
import LoadingSpinner from '../../LoadingSpinner';

/**
 * 
 *  Job list component that shows all job. Loads all jobs from API on mount and reloads when search bar is submitted.
 * 
 *  Accessed from /jobs
 * 
 */

function JobList() {

  const [jobs, setJobs] = useState(null);

  useEffect(function getJobs() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingSpinner />;

  return (
    <div className="JobList">
      <SearchBar searchFor={search} />
      {jobs.length ? 
        (
          <JobCardList jobs={jobs} />
        ) : (
          <p>No results were found.</p>
        )
      }
    </div>
  );
};

export default JobList;