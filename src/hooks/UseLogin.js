import { useState } from "react";
import { login as performLogin } from "../api/api";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username, password) => {
    setIsLoading(true);
    const result = await performLogin(username, password);
    setIsLoading(false);

    if (result.status === 200) setIsLoggedIn(true);
  };

  return { isLoginInProgress: isLoading, isLoggedIn, login };
};
