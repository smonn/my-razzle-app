import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from ".";

describe("<App />", () => {
  test("renders without exploding", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
