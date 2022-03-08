const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
	} catch (error) {
		console.log(`monogdb connection ${error}`);
	}
};

module.exports = connectDB;
