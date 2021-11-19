const mongoose = require("mongoose");
//TODO mongoose connect url
const url = "mongodb://localhost:27017/MMBooks";
mongoose.connect(url);

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	author: {
		type: String,
		required: true,
		trim: true,
	},
	country: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	publisher: {
		type: String,
		required: true,
	},
	publishing_year: {
		type: Number,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	category: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	details: {
		type: Object,
		required: false,
	},
	quotes: {
		type: [Object],
		required: true,
	},
	links: {
		type: Object,
		required: true,
	},
	index: {
		type: [Object],
		required: true,
	},
});

const Book = mongoose.model("Book", schema);

module.exports.Book = Book;
