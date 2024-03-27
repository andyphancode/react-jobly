import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CompanyCard from './CompanyCard.js'
import LoadingSpinner from '../../LoadingSpinner.js';
import JoblyApi from "../../api/api.js";
import SearchBar from '../SearchBar.js';


/**
 * 
 *  Company list component that shows all companies. Loads all companies from API on mount and reloads when search bar is submitted.
 * 
 *  Accessed from /companies
 * 
 */

function CompanyList() {

  const [companies, setCompanies] = useState(null);

  useEffect(function getCompanies () {
    search();
  }, [])

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if(!companies) return (<LoadingSpinner/>);

  return (
    <div className="CompanyList">
      <SearchBar searchFor={search} />
      {companies.length ? 
        (
          <div>
            {companies.map(c=> (
              <CompanyCard
                key={c.handle}
                handle={c.handle}
                name={c.name}
                description={c.description}
                logoUrl={c.logoUrl}                
              />
            ))}
          </div>
        ) : (
          <p>No results were found.</p>
        )
      }
    </div>
  );
};

export default CompanyList;