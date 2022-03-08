const DevJob = require("../models/Job");

const getJobs = async (req, res) => {
	try {
		const jobs = await DevJob.find({}).exec();
		res.status(200).json(jobs);
	} catch (error) {
		console.log(`jobcontroller erro ${error}`);
	}
};

module.exports = { getJobs };
