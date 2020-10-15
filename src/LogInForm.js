import React from "react";
import { useCredantials } from "./hooks/UseCredentials.js";

export const LogInForm = ({ setRequestBody }) => {
    const [
        username, 
        password, 
        handleUserChange, 
        handlePassChange
    ] = useCredantials();

    const handleSubmit = (event) => {
        const body = { username, password };
        setRequestBody(JSON.stringify(body));
        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleUserChange}></input>
                <input type="text" value={password} onChange={handlePassChange} ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
}