const express = require("express");
const bodyParser = require("body-parser");

const finalite = require("./routes/finalite.route");
const revendication = require("./routes/revendication.route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/finalite", finalite);
app.use("/revendication", revendication);

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url = "mongodb://localhost:27017/strat-db";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let port = 3300;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
