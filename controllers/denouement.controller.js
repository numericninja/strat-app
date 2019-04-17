const Denouement = require("../models/denouement.model");

//Simple version, without validation or sanitation
// exports.denouement_show = function(req, res) {
//   res.send("Greetings from the Denouement controller!");
// };

exports.denouement_details = function(req, res) {
  Denouement.findById(req.params.id, function(err, denouement) {
    if (err) return;
    res.send(denouement);
  });
};

exports.denouement_list = function(req, res) {
  Denouement.find({})
    .sort({ votes: "desc" })
    .then(function(denouement) {
      res.json(denouement);
    });
};

exports.denouement_create = function(req, res) {
  let denouement = new Denouement({
    name: req.body.name,
    votes: 1
  });

  denouement.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(denouement._id);
  });
};

exports.denouement_upvote = function(req, res) {
  Denouement.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, denouement) {
      if (err) return;
      res.send("Denouement udpvotes : " + denouement);
    }
  );
};
