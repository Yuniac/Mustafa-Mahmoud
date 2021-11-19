const express = require("express");
const app = express();
const { router } = require("./router/api");
const { allowCrossDomain } = require("./helpers/helpers");

app.use(allowCrossDomain);
app.use("/", router);

app.listen(5000, () => console.log("app running at port 5000..."));
