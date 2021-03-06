require("dotenv").config();

const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const compression = require("compression");

const connectDB = require("./config/conncectDB");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3501;

console.log();
// connect to DB
connectDB();

// middlewares
server.use(compression());
server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "/build")));

// routes
server.use("/jobs", require("./routes/jobs"));
server.use("/", require("./routes/individualJob"));

// server build(contains React UI)
server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/build/index.html"));
});

// listens to server once connection to database has been established
mongoose.connection.once("open", () => {
	console.log("Connected to DB");

	server.listen(`${PORT}`, () => {
		console.log(`Server is up and running at PORT: ${PORT}`);
	});
});
