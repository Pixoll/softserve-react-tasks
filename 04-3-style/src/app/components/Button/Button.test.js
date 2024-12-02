import { screen, render } from "@testing-library/react";
import Button from "."

it("Renders Button without crashing", () => {
  render(<Button />);
});

it("Renders Button correctly", () => {
  render(<Button />);
  expect(screen.getByTestId("element-button")).toHaveTextContent(
    "Wake up Neo..."
  );
});

it("Renders Button with styles", () => {
  render(<Button />);
  expect(screen.getByTestId("element-button")).toHaveStyle(`
        color : rgb(18, 255, 18);
        background-color : transparent;
        border : 0;
        font-family : Courier;
        font-size : 33pt
    `);
});
