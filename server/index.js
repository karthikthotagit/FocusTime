
const express = require("express");
const timerController = require("./controllers/timerController");

const app = express();
const PORT = 5001;

app.use(express.json());

app.post("/api/start-session", (req, res) => timerController.start(req, res));

app.get("/", (req, res) => res.send("Backend running with architecture!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
