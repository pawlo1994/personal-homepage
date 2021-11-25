import { useEffect } from "react";
import { useState } from "react";

export const useResultData = () => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("loading");
    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.github.com/users/pawlo1994/repos")
                .then(response => {
                    if (!response.ok) {
                        new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    setData(response.map(({ html_url, description, name }) => {
                        if (!description) {
                            return ({ html_url, name });
                        }
                        return ({ html_url, name, description });
                    }));
                    setStatus("done");
                })
                .catch(error => {
                    console.error(error);
                    setStatus("error");
                }
                );
        }, 1000)
    }, []);

    return { data, status };
};