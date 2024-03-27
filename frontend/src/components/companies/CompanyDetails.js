import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import JoblyApi from '../../api/api';
import LoadingSpinner from '../../LoadingSpinner';
import JobCardList from '../jobs/JobCardList';

/**
 * 
 *  Company detail component rendering information about company. Also lists jobs. Accessible at /companies/:handle
 * 
 */

function CompanyDetails() {
  
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  
  useEffect(function getCompanyDetails() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }

    getCompany();
  }, [handle])

  if (!company) return <LoadingSpinner />;

  return (
    <div className="CompanyDetails">
      <h5>{company.name}</h5>
      <p>{company.description}</p>
      <JobCardList jobs={company.jobs}/>
    </div>
  );
};

export default CompanyDetails;