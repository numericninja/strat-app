const Finalite = require("../models/finalite.model");

//Simple version, without validation or sanitation
// exports.finalite_show = function(req, res) {
//   res.send("Greetings from the Finalite controller!");
// };

exports.finalite_details = function(req, res) {
  Finalite.findById(req.params.id, function(err, finalite) {
    if (err) return next(err);
    res.send(finalite);
  });
};

exports.finalite_create = function(req, res) {
  let finalite = new Finalite({
    name: req.body.name,
    votes: 1
  });

  finalite.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Finalite created successfully");
  });
};

exports.finalite_upvote = function(req, res) {
  Finalite.findOneAndUpdate(req.params.id, { $inc: { votes: 1 } }, function(
    err,
    finalite
  ) {
    if (err) return next(err);
    res.send("Finalite upvoted.");
  });
};
