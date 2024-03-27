import React from "react";
import { render } from "@testing-library/react";
import Routing from "./Routing";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", function () {
    render(
        <MemoryRouter>
            <Routing/>
        </MemoryRouter>
    )
});

it("renders without crashing", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <Routing/>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
}); 