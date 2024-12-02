import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ButtonGroup from "../components/ButtonGroup";
import "@testing-library/jest-dom";

describe("ButtonGroup Component Tests", () => {
    afterEach(() => {
        cleanup();
    });

    it("should align text to the left when the left option is selected", () => {
        render(<ButtonGroup/>);

        expect(screen.getByTestId("text")).toHaveAttribute("align", "left");

        fireEvent.click(screen.getByLabelText("left"));

        expect(screen.getByTestId("text")).toHaveAttribute("align", "left");
    });

    it("should align text to the center when the center option is selected", () => {
        render(<ButtonGroup/>);

        fireEvent.click(screen.getByLabelText("center"));

        expect(screen.getByTestId("text")).toHaveAttribute("align", "center");
    });

    it("should align text to the right when the right option is selected", () => {
        render(<ButtonGroup/>);

        fireEvent.click(screen.getByLabelText("right"));

        expect(screen.getByTestId("text")).toHaveAttribute("align", "right");
    });
});
