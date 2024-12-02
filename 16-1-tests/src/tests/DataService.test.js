import axios from "axios";
import getGitHubUser from "../services/DataService";

jest.mock("axios");

describe("DataService Tests", () => {
    it("should fetch GitHub user data successfully", async () => {
        const mockResponse = { data: { login: "yurkovskiy", name: "Yurko K" } };

        axios.get.mockResolvedValue(mockResponse);

        const userData = await getGitHubUser("yurkovskiy");

        expect(userData.data.login).toBe("yurkovskiy");
        expect(userData.data.name).toBe("Yurko K");
    });

    it("should handle errors correctly when fetching data", async () => {
        axios.get.mockRejectedValue(new Error("Request failed"));

        await expect(getGitHubUser("yurkovskiy")).rejects.toThrow("Request failed");
    });
});
