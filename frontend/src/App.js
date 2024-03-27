import './App.css';
import Routing from './components/routing-nav/Routing';
import NavBar from './components/routing-nav/NavBar';
import { BrowserRouter as Router} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import JoblyApi from './api/api';
import UserContext from './components/UserContext';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

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

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser}}
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
