import axios from "axios";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmU2MGM5OTBkZTc3Njk4MDA5MzY4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODE3ODE3OCwiZXhwIjoxNjY4NDM3Mzc4fQ.w9UhbCrIhuVLkr6jp3cJAELC1qQBCKUqJgTOkl9Glu4"
const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
