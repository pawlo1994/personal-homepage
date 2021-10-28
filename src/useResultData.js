import { useEffect } from "react";
import { useState } from "react";

export const useResultData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.github.com/users/pawlo1994/repos")
                .then(response => response.json())
                .then(response => setData(response.map(({ html_url, description, name }) => {
                    if (!description) {
                        return ({ html_url, name });
                    }
                    return ({ html_url, name, description });
                })))
                .catch(error => console.error(error));
        }, 1000)
    }, []);

    return data;
};