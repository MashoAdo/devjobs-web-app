require("dotenv").config();

const express = require("express");
const server = express();
const path = require("path");

const connectDB = require("./config/conncectDB");
const mongoose = require("mongoose");

// const jobs = require("./routes/jobs");

const PORT = process.env.PORT || 3501;
// connect to DB
connectDB();

// middlewares
server.use(express.json());

server.use("/jobs", require("./routes/jobs"));

mongoose.connection.once("open", () => {
	console.log("Connected to DB");

	server.listen(`${PORT}`, () => {
		console.log("Server is up and running");
	});
});
