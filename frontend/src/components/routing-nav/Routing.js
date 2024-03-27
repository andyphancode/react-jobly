import React from 'react';
import { Route, Routes } from "react-router-dom";
import './Routing.css'
import Homepage from '../home/Homepage';
import CompanyList from '../companies/CompanyList';
import CompanyDetails from '../companies/CompanyDetails';
import JobList from '../jobs/JobList';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import ProfileForm from '../profile/ProfileForm';


function Routing({ login, signup }) {
  return (
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/companies" element={<CompanyList/>} />
        <Route path="/companies/:handle" element={<CompanyDetails/>} />
        <Route path="/jobs" element={<JobList/>} />
        <Route path="/login" element={<LoginForm login={login}/>} />
        <Route path="/signup" element={<SignupForm signup={signup}/>} />
        <Route path="/profile" element={<ProfileForm/>} />
      </Routes>        
  );
};

export default Routing;
