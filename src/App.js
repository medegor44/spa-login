import React from "react"
import { Loading } from "./Loading";
import { LoggedIn } from "./LoggedIn";
import { useApi } from "./hooks/UseApi.js"
import { LogInForm } from "./LogInForm.js"

export const App = () => {
    const [{isLoading, isLoggedIn}, setRequestBody] = useApi();

    console.log(`isLoading ${isLoading} isLoggedIn ${isLoggedIn}`);

    if (isLoggedIn)
        return (<LoggedIn></LoggedIn>);
    if (isLoading)
        return (<Loading></Loading>);
    return (<LogInForm setRequestBody={setRequestBody}></LogInForm>);
}
