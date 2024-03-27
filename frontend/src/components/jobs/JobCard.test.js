import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";

it("matches snapshot", function () {
    let job = {
        title: "homeless person",
        salary: 0,
        equity: 0,
        companyName: "street"
    };

    const { asFragment } = render (
        <JobCard job={job}/>
    );
    expect(asFragment()).toMatchSnapshot();
});