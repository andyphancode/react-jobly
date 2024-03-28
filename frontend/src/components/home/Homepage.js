import React, {useContext} from 'react';
import "./Homepage.css";
import {Row, Col, Button} from "reactstrap";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  const {currentUser} = useContext(UserContext);
  
  return (
    <div className="Homepage">
      {!currentUser ?
      <h1>Welcome to Jobly!</h1>
      :
      <h1>Welcome back, {currentUser.username}.</h1>
      }
      {!currentUser ?
      <Row className="mt-3">
        <Col>
          <Link to="/login">
            <Button className="home-button me-3" color="primary">
              Login
            </Button>          
          </Link>
          <Link to="/signup">
            <Button className="home-button" color="primary">
              Signup
            </Button>          
          </Link>
        </Col>
      </Row>
      :
      <Row>
        <Col>
          <Link to="/companies">
            <Button className="home-button me-3" color="primary">
              Find Companies
            </Button>          
          </Link>
          <Link to="/jobs">
            <Button className="home-button" color="primary">
              Find Jobs
            </Button>          
          </Link>
        </Col>
      </Row>    
      }

    </div>
  );
};

export default Homepage;
