const DevJob = require("../models/Job");

// find job with id specified from request url path and send it back as a response

const getIndividualJob = async (req, res) => {
	const id = req.params["id"];
	try {
		DevJob.findById(id, (err, job) => {
			if (err) throw err;

			res.send(job);
		});
	} catch (error) {
		res.send(error);
	}
};

module.exports = { getIndividualJob };
