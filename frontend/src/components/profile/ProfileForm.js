import React, { useState, useContext } from 'react';
import './ProfileForm.css';
import JoblyApi from '../../api/api';
import UserContext from '../UserContext';
import {Alert, Form, FormGroup, Input, Label, Button} from "reactstrap";

/**
 * 
 * Form for editing profile. On successful submission, user's details will
 * be changed accordingly. Accessed from /profile.
 * 
 */

function ProfileForm() {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName,
    lastName: currentUser?.lastName,
    email: currentUser?.email,
    username: currentUser?.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveSuccessful, setSaveSuccessful] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.updateUser(username, profileData);
    } catch (errors) {
      setFormErrors(errors);
      return;
    }

    setFormData(data => ({ ...data, password: "" }));
    setFormErrors([]);
    setSaveSuccessful(true);
    setCurrentUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
    setFormErrors([]);
  }  
  
  
  return (
    <Form className="ProfileForm" onSubmit={handleSubmit}>
      <h1 className="mb-3">Update Your Profile</h1>
      <FormGroup floating>
        <Input
          id="profile-username"
          name="username"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={formData.username}
          required
          autoComplete='off'
          disabled
        />
        <Label for="username">
          Username
        </Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="firstName"
          name="firstName"
          placeholder="First Name"
          type="text"
          onChange={handleChange}
          value={formData.firstName}
          required
          autoComplete='off'
        />
        <Label for="firstName">
          First Name
        </Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={handleChange}
          value={formData.lastName}
          required
          autoComplete='off'
        />
        <Label for="lastName">
          Last Name
        </Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          required
          autoComplete='off'
        />
        <Label for="email">
          Email
        </Label>
      </FormGroup>
      {formErrors.length ?
        (formErrors.map(err => (
          <Alert color="danger">{err}</Alert>
        ))) :
        null
      }
      
      <Button color="primary">
        Save Changes
      </Button>

      {saveSuccessful ?
       <Alert>Changes saved successfully.</Alert>
        :
        null
      }
    </Form>
  );
};


export default ProfileForm;