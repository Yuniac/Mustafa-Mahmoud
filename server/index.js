const express = require("express");
const path = require("path");
const app = express();

const { router: APIRouter } = require("./router/api");
const { router: websiteRouter } = require("./router/website");

const { allowCrossDomain } = require("./helpers/server_helpers");

app.use(allowCrossDomain);

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use("/", express.static("public"));
app.use("/book", express.static("public"));

app.use("/", websiteRouter);
app.use("/api/books", APIRouter);

// error handling and unknown paths
app.get("*", (req, res, next) => {
	next(new Error("ThepPage you are trying to access can't be found"));
});
app.use((err, req, res, next) => {
	const { status = 500, message = "Something went wrong... please try again later or check the link" } = err;
	res.status(status).send(message);
});

app.listen(5000, () => console.log("app running at port 5000..."));
