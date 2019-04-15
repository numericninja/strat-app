const Revendication = require("../models/revendication.model");

//Simple version, without validation or sanitation
// exports.revendication_show = function(req, res) {
//   res.send("Greetings from the Revendication controller!");
// };

exports.revendication_details = function(req, res) {
  Revendication.findById(req.params.id, function(err, revendication) {
    if (err) return next(err);
    res.send(revendication);
  });
};

exports.revendication_create = function(req, res) {
  let revendication = new Revendication({
    name: req.body.name,
    votes: req.body.votes
  });

  revendication.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Revendication created successfully");
  });
};

exports.revendication_upvote = function(req, res) {
  Revendication.findOneAndUpdate(
    req.params.id,
    { $inc: { votes: 1 } },
    function(err, revendication) {
      if (err) return next(err);
      res.send("Revendication udpvotes.");
    }
  );
};
