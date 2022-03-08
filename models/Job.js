const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = require("mongodb").ObjectId;

const jobSchema = new Schema({
	id: {
		type: ObjectId,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	logoBackground: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	postedAt: {
		type: String,
		required: true,
	},
	contract: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	website: {
		type: String,
		required: true,
	},
	apply: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	requirements: {
		content: {
			type: String,
			required: true,
		},
		items: [{ type: String, required: true }],
	},

	role: {
		content: {
			type: String,
			required: true,
		},
		items: [{ type: String, required: true }],
	},
});
const DevJob = mongoose.model("Devjob", jobSchema);

module.exports = DevJob;
