import React from "react";
import { render } from "@testing-library/react";
import CompanyDetails from "./CompanyDetails";
import { MemoryRouter, Routes, Route } from "react-router-dom";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <CompanyDetails />
      </MemoryRouter>,
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/companies/moore-plc"]}>
        <Routes>
            <Route path="/companies/:handle" element={<CompanyDetails/>} />            
        </Routes>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

