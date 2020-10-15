import { useState, useEffect } from "react";
import regeneratorRuntime from "regenerator-runtime";

export const useApi = () => {
    const [requestBody, setRequestBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log(requestBody);
        if (!requestBody)
            return;

        const submitCredentials = async () => {
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            const options = {
                method: "POST",
                headers,
                mode: "cors",
                body: requestBody,
            };

            setIsLoading(true);

            const result = await fetch(
                "https://542ee5d5c48a1812a1411109fe31bfab.m.pipedream.net", 
                options
            );

            if (result.status === 200)
                setIsLoggedIn(true);

            setIsLoading(false);
        };

        submitCredentials();
    }, [requestBody, setIsLoggedIn, setIsLoading]);

    return [{isLoading, isLoggedIn}, setRequestBody];
}