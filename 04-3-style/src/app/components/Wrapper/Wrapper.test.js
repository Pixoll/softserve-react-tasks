import { screen, render } from "@testing-library/react";

import Wrapper from "./Wrapper";

it("Renders Wrapper without crashing", () => {
  render(<Wrapper />);
});

it("Renders Wrapper with class", () => {
  render(<Wrapper />);
  expect(screen.getByTestId("element-wrapper")).toHaveClass("wrapper-app");
});
