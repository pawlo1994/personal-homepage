import { request } from "@octokit/request";

export const useResultData = async () => {
    const result = await request("GET /users/{user}/repos", {
        user: "Pawlo1994",
    });

    const resultData = Object.values(result.data).map(
        ({ name, html_url, description }) => ({ name, html_url, description }))
    return resultData;
};