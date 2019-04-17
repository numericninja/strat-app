const Strategie = require("../models/strategie.model");

exports.strategie_details = function(req, res) {
  Strategie.findById(req.params.id, function(err, strategie) {
    if (err) return;
    res.send(strategie);
  });
};

exports.strategie_list = function(req, res) {
  Strategie.find({})
    .sort({ votes: "desc" })
    .then(function(strategie) {
      res.json(strategie);
    });
};

exports.strategie_create = function(req, res) {
  let strategie = new Strategie({
    name: req.body.name,
    votes: 1
  });

  strategie.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(strategie._id);
  });
};

exports.strategie_upvote = function(req, res) {
  Strategie.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, strategie) {
      if (err) return;
      res.send("Strategie upvoted to strategie :" + strategie.name);
    }
  );
};
