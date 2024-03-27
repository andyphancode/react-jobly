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
import ProtectedRoute from './ProtectedRoute';

function Routing({ login, signup }) {

  return (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route
      path="/companies"
      element={
        <ProtectedRoute>
          <CompanyList />
        </ProtectedRoute>
      }
    />
    <Route 
      path="/companies/:handle" 
      element={
        <ProtectedRoute>
          <CompanyDetails/>            
        </ProtectedRoute>
      }
        
    />
    <Route
      path="/jobs"
      element={
        <ProtectedRoute>
          <JobList />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <ProfileForm />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<p>Nothing here! 404.</p>} />
    <Route path="/login" element={<LoginForm login={login} />}/>
    <Route path="/signup" element={<SignupForm signup={signup} />}/>
  </Routes>
  );
};

export default Routing;
