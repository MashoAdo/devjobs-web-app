require("dotenv").config();

const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");

const connectDB = require("./config/conncectDB");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3501;

// connect to DB
connectDB();

// middlewares
server.use(cors());
server.use(express.json());

// routes
server.use("/jobs", require("./routes/jobs"));
server.use("/", require("./routes/individualJob"));
server.get("/", (req, res) => {
	res.send("home page");
});

// listens to server once connection to database has been established
mongoose.connection.once("open", () => {
	console.log("Connected to DB");

	server.listen(`${PORT}`, () => {
		console.log(`Server is up and running ${PORT}`);
	});
});
