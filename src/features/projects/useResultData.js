import { useEffect } from "react";
import { useState } from "react";

export const useResultData = () => {
    const userName = "pawlo1994";
    const [data, setData] = useState([]);
    const [status, setStatus] = useState("loading");
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.github.com/users/${userName}/repos`)
                .then(response => {
                    if (!response.ok) {
                        new Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(response => {
                    setData(response.map(({ html_url, description, name, has_pages }) => {
                        if (!description) {
                            return ({ html_url, name, has_pages });
                        }
                        return ({ html_url, name, description, has_pages });
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

    return { data, status, userName };
};