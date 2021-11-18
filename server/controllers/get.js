const {Book} = require("../schema/schema")
const getAllBooks = async (req, res) => {
    const books = await Book.find({});
	res.json(books);
}

module.exports.getAllBooks = getAllBooks