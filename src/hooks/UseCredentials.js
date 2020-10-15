import { useState } from "react";

export const useCredantials = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUserChange = (event) => {
        const value = event.target.value;
        setUsername(value);
    }

    const handlePassChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    return [username, password, handleUserChange, handlePassChange];
}