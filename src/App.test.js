import React from "react";
import { render } from "@testing-library/react";
import App from "../src/routes/App";
describe("Menu", () => {
  test("get and render Menu", () => {
    render(<App />);
  });
});
