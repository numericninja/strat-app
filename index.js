const express = require("express");
const bodyParser = require("body-parser");

const finalite = require("./routes/finalite.route");
const revendication = require("./routes/revendication.route");
const strategie = require("./routes/strategie.route");
const actionsouhaitee = require("./routes/actionsouhaitee.route");
const actionpeusouhaitee = require("./routes/actionpeusouhaitee.route");
const acquis = require("./routes/acquis.route");
const denouement = require("./routes/denouement.route");
const jour = require("./routes/jour.route");

const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/finalite", finalite);
app.use("/revendication", revendication);
app.use("/strategie", strategie);
app.use("/actionsouhaitee", actionsouhaitee);
app.use("/actionpeusouhaitee", actionpeusouhaitee);
app.use("/acquis", acquis);
app.use("/denouement", denouement);
app.use("/jour", jour);

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
