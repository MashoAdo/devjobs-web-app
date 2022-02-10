require("dotenv").config();

const DevJob = require("../models/Job");
// var MongoClient = require("mongodb").MongoClient;
// var url = process.env.DATABASE_URI;

const getJobs = async (req, res) => {
	// DevJob.find({}, (error, data) => {
	// 	if (error) console.log(error);
	// 	else {
	// 		console.log(data);
	// 		res.status(200).json({ data });
	// 	}
	// });

	const result = await DevJob.find({}).exec();

	res.send(result);

	console.log(result);
};

const postJob = async (req, res) => {
	const {
		company,
		logo,
		logoBackground,
		position,
		postedAt,
		contract,
		location,
		website,
		apply,
		description,
		requirements,
		role,
	} = req.body;

	try {
		const newjob = new devJob({
			company,
			logo,
			logoBackground,
			position,
			postedAt,
			contract,
			location,
			website,
			apply,
			description,
			requirements,
			role,
		});
		newjob.save((error, data) => {
			if (!error) res.status(201).json(data);
			res.status(400).json({ msg: error });
		});
	} catch (error) {
		res.json({ message: error });
	}
};

module.exports = { getJobs, postJob };

// MongoClient.connect(url, function (err, db) {
// 	if (err) throw err;
// 	var dbo = db.db("devjobsDb");
// 	dbo
// 		.collection("devjobs")
// 		.find({})
// 		.toArray(function (err, result) {
// 			if (err) throw err;
// 			res.status(200).json({ result: result });
// 			db.close();
// 		});
// });
