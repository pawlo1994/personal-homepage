import { API_URL, API_Target, GithubPagesURL, URL_Protocol } from "./urlProperties";

export const makeDataURL = (userName) => {
    return `${URL_Protocol}${API_URL}${userName}${API_Target}`;
};

export const makeGithubPagesURL = (userName, projectName) => {
    return `${URL_Protocol}${userName}${GithubPagesURL}${projectName}`;
};