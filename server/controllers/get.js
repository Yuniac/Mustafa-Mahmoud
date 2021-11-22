const { Book } = require("../schema/schema");

const getAllBooks = async (limit) => {
	try {
		if (limit) {
			const books = await Book.find({}).limit(Number(limit));
			return books;
		} else {
			const books = await Book.find({});
			if (books.length) return books;
			else return false;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
};

const getAllCategories = async () => {
	try {
		const categories = await Book.distinct("category");
		if (categories.length) return categories;
		else return false;
	} catch (e) {
		console.log(e);
		return false;
	}
};

const getBasedOnAcategory = async (category, limit) => {
	const booksOffOneCategory = await Book.find({ category: category }).limit(Number(limit));
	return booksOffOneCategory;
};

const getBooksBasedOnQueryParams = async (query) => {
	const { id, name, category, year, lt, gt, limit } = query;

	if (id) {
		const matchingBook = await getBookById(id);
		if (matchingBook) return matchingBook;
		return "no such ID";
	}

	if (name) {
		const matchingBook = await getBookByName(name);
		if (matchingBook) return matchingBook;
		return "no matching book";
	}

	if (year) {
		const matchingBook = await getBooksByPublishingYear(year, limit);
		if (matchingBook && matchingBook.length) return matchingBook;
		return "no books match the given publish year";
	}

	if (lt) {
		const matchingBook = await getBooksWithinYearsRange("$lt", lt, limit);
		if (matchingBook && matchingBook.length) return matchingBook;
		return "no books were published before that year";
	}

	if (gt) {
		const matchingBook = await getBooksWithinYearsRange("$gt", gt, limit);
		if (matchingBook) return matchingBook;
		return "no books were published before that year";
	}

	if (category) {
		const sortedByCategoryAndLimited = await getBasedOnAcategory(category, limit);
		if (sortedByCategoryAndLimited.length) return sortedByCategoryAndLimited;
		return "no books under that category ID";
	} else if (limit) {
		const allBooksButLimited = await getAllBooks(limit);
		return allBooksButLimited;
	}
	return "query parameters error";
};

const getBooksCount = async () => {
	const result = await Book.countDocuments();
	return result;
};

const getBookByName = async (name) => {
	const matchingBook = await Book.findOne({ name: name });
	if (matchingBook) return matchingBook;
};

const getBookById = async (id) => {
	const matchingBook = await Book.findById(id);
	return matchingBook;
};

const getBooksIDAndNames = async () => {
	const result = await Book.find({}, "name _id");
	return result;
};

const getBooksByPublishingYear = async (year, limit) => {
	const matchingBook = await Book.find({ publishing_year: Number(year) }).limit(Number(limit));
	return matchingBook;
};

const getBooksWithinYearsRange = async (operator, year, limit) => {
	if (operator === "$gt") {
		const matchingBook = await Book.find({ publishing_year: { $gte: Number(year) } }).limit(limit);
		return matchingBook;
	} else if (operator === "$lt") {
		const matchingBook = await Book.find({ publishing_year: { $lte: Number(year) } }).limit(limit);
		return matchingBook;
	}
};

const getRandomQuote = async () => {
	const count = await Book.findOne({ quotes: { $ne: [] } }).countDocuments();
	const randomNumber = Math.floor(Math.random() * count);
	const randomDocument = await Book.findOne({ quotes: { $ne: [] } }).skip(randomNumber);
	const randomQuoteNumber = Math.floor(Math.random() * randomDocument.quotes.length);
	const result = {
		parent_id: randomDocument._id,
		quote: randomDocument.quotes[randomQuoteNumber],
	};
	if (result) return result;
	return "Couldn't retrieve any quotes, please check your request";
};

const getRandomQuoteFromABook = async (query) => {
	const { id, name, all } = query;
	let document;
	if (id) {
		document = await Book.findById(id);
	} else if (name) {
		document = await Book.findOne({ name: name });
	}
	// if this book has quotes
	if (document.quotes.length) {
		// if the request wants all quotes
		if (all) {
			const result = {
				parent_id: document._id,
				quote: document.quotes,
			};
			return result;
		}
		// not all the quotes, instead only a random one
		const randomQuoteNumber = Math.floor(Math.random() * document.quotes.length);
		const result = {
			parent_id: document._id,
			quote: document.quotes[randomQuoteNumber],
		};
		return result;
	} else {
		return "This book has no quotes in our database... if you can contribute and add quotes please do by contacting me";
	}
};

const getSimilarBooks = async (category, id) => {
	const resultLength = await Book.find({ category: category }).countDocuments();
	const randomNumber = Math.floor(Math.random() * resultLength);
	// return similar books but not the same book the use is currently viewing
	const result = await Book.find({ category: category, _id: { $ne: id } })
		.skip(randomNumber)
		.limit(3);
	return result;
};

module.exports = {
	getAllBooks,
	getSimilarBooks,
	getBookById,
	getAllCategories,
	getBasedOnAcategory,
	getBooksBasedOnQueryParams,
	getBooksCount,
	getBooksIDAndNames,
	getRandomQuote,
	getRandomQuoteFromABook,
};
