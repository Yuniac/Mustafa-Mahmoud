function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

const allowCrossDomain = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET");
	next();
};

module.exports = { isEmpty, allowCrossDomain };
