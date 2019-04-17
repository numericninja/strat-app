const Revendication = require("../models/revendication.model");

//Simple version, without validation or sanitation
// exports.revendication_show = function(req, res) {
//   res.send("Greetings from the Revendication controller!");
// };

exports.revendication_details = function(req, res) {
  Revendication.findById(req.params.id, function(err, revendication) {
    if (err) return;
    res.send(revendication);
  });
};

exports.revendication_list = function(req, res) {
  Revendication.find({})
    .sort({ votes: "desc" })
    .then(function(revendication) {
      res.json(revendication);
    });
};

exports.revendication_create = function(req, res) {
  let revendication = new Revendication({
    name: req.body.name,
    votes: 1
  });

  revendication.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(revendication._id);
  });
};

exports.revendication_upvote = function(req, res) {
  Revendication.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, revendication) {
      if (err) return;
      res.send("Revendication udpvotes : " + revendication);
    }
  );
};
