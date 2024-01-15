import axios from "axios";

export async function login(req) {
  const data = await fetch("http://localhost:5670/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      email: req.email,
      password: req.password,
    }),
  });

  const res = await data.json();

  localStorage.setItem("token", res.token);

  return res;
}

export async function register({ name, email, password }) {
  const data = await fetch("http://localhost:5670/api/auth/register", {
    method: "POST",

    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  });
  return data.json();
}

export async function registerAxios(name, email, password) {
  return await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/api/auth/register",
    {
      name: name,
      email: email,
      password: password,
      role: "user",
    }
  );
}

export async function posts() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}
