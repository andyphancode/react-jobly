import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="random"
            name="Random"
            description="Random company."
            logo_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/250px-Google_2015_logo.svg.png"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
