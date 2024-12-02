import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Calculations from "../components/Calculations";
import "@testing-library/jest-dom";

describe("Calculations Component Tests", () => {
    afterEach(() => {
        cleanup();
    });

    it("should perform correct addition", () => {
        render(<Calculations/>);

        fireEvent.input(screen.getByLabelText("first number"), { target: { value: 2 } });
        fireEvent.input(screen.getByLabelText("second number"), { target: { value: 3 } });

        fireEvent.click(screen.getByText((content, element) =>
            element.tagName.toLowerCase() === "div" && content === "+"
        ));

        fireEvent.click(screen.getByRole("button", { name: /evaluate/i }));

        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("should perform correct subtraction", () => {
        render(<Calculations/>);

        fireEvent.input(screen.getByLabelText("first number"), { target: { value: 5 } });
        fireEvent.input(screen.getByLabelText("second number"), { target: { value: 3 } });

        fireEvent.click(screen.getByText((content, element) =>
            element.tagName.toLowerCase() === "div" && content === "-"
        ));

        fireEvent.click(screen.getByRole("button", { name: /evaluate/i }));

        expect(screen.getByText("2")).toBeInTheDocument();
    });
});
