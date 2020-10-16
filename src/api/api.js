export const login = (username, password) => {
  const url = "https://542ee5d5c48a1812a1411109fe31bfab.m.pipedream.net";
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
};
