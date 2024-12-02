import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../components/App";
import "@testing-library/jest-dom";
import getGitHubUser from "../services/DataService";

jest.mock("../services/DataService");

describe("App Component Tests", () => {
    afterEach(() => {
        cleanup();
    });

    it("should render the App component and display two Info components with correct props", async () => {
        getGitHubUser.mockResolvedValue({
            data: {
                login: "yurkovskiy",
                name: "Yurko K",
                location: "Ukraine",
            }
        });

        await act(async () => {
            render(<App/>);
        });

        await waitFor(() => screen.getAllByText("GitHub User Info"));

        const infoElements = screen.getAllByText("GitHub User Info");
        expect(infoElements).toHaveLength(2);
    });
});
