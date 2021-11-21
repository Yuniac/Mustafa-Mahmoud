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
app.use("/", websiteRouter);
app.use("/books", APIRouter);

app.listen(5000, () => console.log("app running at port 5000..."));
