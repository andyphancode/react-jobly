import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { UserProvider } from "../../testProvider";

it("matches snapshot", function () {
    let job = {
        title: "homeless person",
        salary: 0,
        equity: 0,
        companyName: "street"
    };

    const { asFragment } = render(
        <UserProvider>
            <JobCard job={job}/>            
        </UserProvider>

    );
    expect(asFragment()).toMatchSnapshot();
});