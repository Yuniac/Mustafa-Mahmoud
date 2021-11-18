const mongoose = require("mongoose");
//TODO mongoose connect url
const url = "mongodb://localhost:27017/MMBooks"
mongoose.connect(url);

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	author: {
		type: String,
		required: true,
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
		required: false,
		default: "الناشر غير معروف",
	},
	publishing_date: {
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
		required: false,
		default: "لا مقتطفات موجودة لهذا الكتاب حالياً"
	},
	links: {
		type: Object,
		required: true,
	},
	index: {
		type: [Object],
		required: false,
		default: "الفهرس غير متاح"
	}
});

const Book = mongoose.model("Book", schema);

module.exports.Book = Book
