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
