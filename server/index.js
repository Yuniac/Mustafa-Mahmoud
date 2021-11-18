const express = require("express");
const app = express();
const {router} = require("./router/api")

app.use("/", router)

app.listen(5000, () => console.log("app running at port 5000..."));