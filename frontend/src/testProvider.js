import React from "react";
import UserContext from "./components/UserContext";

const testUser = {
    username: "test",
    first_name: "test",
    last_name: "test",
    email: "test@test.com",
    photo_url: null,
  };

const UserProvider =
  ({ children, currentUser = testUser, hasAppliedToJob = () => false }) => (
  <UserContext.Provider value={{ currentUser, hasAppliedToJob }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };  