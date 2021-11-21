const express = require("express");
const router = express.Router();
// controllers
const {
	getAllBooks,
	getBooksCount,
	getAllCategories,
	getBooksBasedOnQueryParams,
	getBooksIDAndNames,
	getRandomQuote,
	getRandomQuoteFromABook,
} = require("../controllers/get");
// helpers
const { isEmpty } = require("../helpers/server_helpers");

router.get("/", async (req, res) => {
	// we first check whether any query parameters are present, we do this by checking whether `req.query` is empty or not;
	const isReqQueryEmpty = isEmpty(req.query);
	try {
		if (isReqQueryEmpty) {
			// no query, just send all books as;
			const result = await getAllBooks();

			if (result) {
				res.status(200).json({ success: true, data: result });
			} else {
				res.status(500).json({
					success: true,
					data: result,
					error_message: "Something went wrong... please try again later or check your request",
				});
			}
		} else {
			// query params are present, work accordingly;
			const result = await getBooksBasedOnQueryParams(req.query);
			// if name was provided but nothing matched it, this separation is only to be able to provide different error messages
			switch (result) {
				case "no matching book" || "no such ID":
					res.status(404).json({ sucess: false, data: null, error_message: "No book can be found using that name or ID" });
					break;
				case "no books were published in that year":
					res.status(404).json({ sucess: false, data: null, error_message: "No books were published in that year" });
					break;
				case "no books under that category ID":
					res.status(404).json({ sucess: false, data: null, error_message: "No books were found using that category ID" });
				case "query parameters error":
					res.status(400).json({
						sucess: false,
						data: null,
						error_message: "Query parameteres error, please check your request query parameteres",
					});
					break;
				case result: // success here
					res.json({ success: true, data: result, error_message: null });
					break;
			}
		}
	} catch (e) {
		console.log(e);
		res.json({ sucess: false, data: null, error_message: "Something went wrong, please try again later or check your request" });
	}
});

router.get("/count", async (req, res) => {
	try {
		const result = await getBooksCount();
		if (result) {
			res.json({ sucess: true, data: result });
		} else {
			res.status(200).json({
				sucess: false,
				data: null,
				error_message: "Couldn't count the books at the moment... please try again later",
			});
		}
	} catch (e) {
		console.log(e);
		res.json({
			sucess: false,
			data: null,
			error_message: "Something went wrong... please try again later or check your request",
		});
	}
});

router.get("/categories", async (req, res) => {
	try {
		const result = await getAllCategories();
		if (result && result.length) {
			res.json({ success: true, data: result, error_message: null });
		} else {
			res.json({
				success: false,
				data: result,
				error_message: "Couldn't retrieve all categories at the moment... please try again later",
			});
		}
	} catch (e) {
		console.log(e);
		res.json({
			sucess: false,
			data: null,
			error_message: "Couldn't retrieve all categories at the moment... please try again later",
		});
	}
});

router.get("/list", async (req, res) => {
	try {
		const result = await getBooksIDAndNames();
		if (result) {
			res.json({ success: true, data: result, error_message: null });
		} else {
			res.json({
				success: false,
				data: null,
				error_message: "Couldn't retrieve books IDs and names at the moment... please try again later",
			});
		}
	} catch (e) {
		console.log(e);
	}
});

router.get("/quote", async (req, res) => {
	try {
		const isReqBodyEmpty = isEmpty(req.query);
		if (isReqBodyEmpty) {
			const result = await getRandomQuote();
			if (result && result !== String) {
				res.status(200).json({ success: true, data: result, error_message: null });
			} else {
				res.status(500).json({
					success: false,
					data: null,
					error_message: "Couldn't retrieve a quote at the moment... please try again later",
				});
			}
		} else {
			const result = await getRandomQuoteFromABook(req.query);
			if (result && result !== String) {
				res.status(200).json({ success: true, data: result, error_message: null });
			} else {
				res.status(500).json({
					success: false,
					data: null,
					error_message: "Couldn't retrieve a quote at the moment... please try again later",
				});
			}
		}
	} catch (e) {
		console.log(e);
	}
});

module.exports.router = router;
