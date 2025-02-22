const express = require ("express");

const app = express();
const PORT = 5500;
const axios = require("axios");


app.get("/", (req, res) => {
    res.send("Welcome to the Random Jokes API!");
});

app.get("/api/jokes/random", async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
        const jokeData = response.data;
        let jokeText = jokeData.type === "single"
            ? jokeData.joke
            : `${jokeData.setup}\n${jokeData.delivery}`;
        res.send(jokeText);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch joke" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
