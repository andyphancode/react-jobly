import './App.css';
import Routing from './components/routing-nav/Routing';
import NavBar from './components/routing-nav/NavBar';
import { BrowserRouter as Router} from "react-router-dom";
import React, { useState, useEffect } from "react";
import JoblyApi from './api/api';
import UserContext from './components/UserContext';
import {jwtDecode} from "jwt-decode";
import useLocalStorage from './useLocalStorage';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [userInfoLoaded, setUserInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("jobly-token");
  const [applications, setApplications] = useState(new Set([]))



  useEffect(function loadUserInfo() {
    async function getCurrentUserInfo() {
      if(token) {
        try {
          let { username } = jwtDecode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplications(new Set(currentUser.applications))
        } catch (err) {
          console.error(err);
          setCurrentUser(null);
        }
      }
      setUserInfoLoaded(true);
    }
    setUserInfoLoaded(false);
    getCurrentUserInfo();
  }, [token])

  // Logs user out
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // Signs up user
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }
  
  // Logs in user
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  // Check if job has been applied for
  function hasAppliedToJob(id) {
    return applications.has(id);
  }

  // Check if job has been applied to and update application IDs
  function apply(id) {
    if(!hasAppliedToJob(id)) {
      JoblyApi.applyToJob(currentUser.username, id);
      setApplications(new Set([...applications, id]));
    }
  }

  if (!userInfoLoaded) return null;

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, hasAppliedToJob, apply}}
        >
          <NavBar logout={logout}/>
          <main>
            <Routing login={login} signup={signup} />
          </main>          
        </UserContext.Provider>


      </Router>
    </div>
  );
}

export default App;
