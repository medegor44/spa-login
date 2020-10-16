import React from "react";
import { Loading } from "./Loading";
import { LoggedIn } from "./LoggedIn";
import { useLogin } from "./hooks/UseLogin.js";
import { LogInForm } from "./LogInForm.js";

export const App = () => {
  const { login, isLoginInProgress, isLoggedIn } = useLogin();

  const handleLogin = async (username, password) => {
    await login(username, password);
  };

  if (isLoggedIn) return <LoggedIn />;
  if (isLoginInProgress) return <Loading />;

  return <LogInForm onLogin={handleLogin} />;
};
