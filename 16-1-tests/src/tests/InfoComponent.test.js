import { render, screen, waitFor } from "@testing-library/react";
import Info from "../components/Info";
import getGitHubUser from "../services/DataService";
import "@testing-library/jest-dom";

jest.mock("../services/DataService");

describe("Info Component Tests", () => {
    it("should display user information when data is fetched successfully", async () => {
        getGitHubUser.mockResolvedValue({
            data: {
                login: "yurkovskiy",
                name: "Yurko K",
                location: "Ukraine",
            },
        });

        render(<Info user="yurkovskiy"/>);

        await waitFor(() => screen.getByText("login: yurkovskiy"));

        expect(screen.getByText("login: yurkovskiy")).toBeInTheDocument();
        expect(screen.getByText("name: Yurko K")).toBeInTheDocument();
        expect(screen.getByText("location: Ukraine")).toBeInTheDocument();
    });

    it("should display an error message when there is a request error", async () => {
        getGitHubUser.mockRejectedValue(new Error("request error"));

        render(<Info user="yurkovskiy"/>);

        await waitFor(() => screen.getByText("error: request error"));

        expect(screen.getByText("error: request error")).toBeInTheDocument();
    });
});
