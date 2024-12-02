import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom";

describe("App Component Tests", () => {
    afterEach(() => {
        cleanup();
    });

    it("should display the image when the Picture tab is selected", () => {
        render(<App/>);

        fireEvent.click(screen.getByText("Picture"));

        expect(screen.getByAltText("...")).toBeInTheDocument();
    });

    it("should display the Calculation component when the Calculations tab is selected", () => {
        render(<App/>);

        fireEvent.click(screen.getByText("Calculations"));

        expect(screen.getByText("Result")).toBeInTheDocument();
    });

    it("should display the ButtonGroup component when the Group tab is selected", () => {
        render(<App/>);

        fireEvent.click(screen.getByText("Group"));

        expect(screen.getByTestId("button-group")).toBeInTheDocument();
    });

    it("should not display components when not selected", () => {
        render(<App/>);

        fireEvent.click(screen.getByText("Calculations"));
        expect(screen.queryByAltText("...")).not.toBeInTheDocument();
        expect(screen.queryByText("Result")).toBeInTheDocument();
        expect(screen.queryByTestId("button-group")).not.toBeInTheDocument();
    });
});
