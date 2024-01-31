import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-rocketmovies-la2e.onrender.com"
});

// api.get("/users/:id")