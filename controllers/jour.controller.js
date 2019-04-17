const Jour = require("../models/jour.model");

exports.jour_details = function(req, res) {
  Jour.findById(req.params.id, function(err, jour) {
    if (err) return;
    res.send(jour);
  });
};

exports.jour_list = function(req, res) {
  Jour.find({})
    .sort({ votes: "desc" })
    .then(function(jour) {
      res.json(jour);
    });
};

exports.jour_create = function(req, res) {
  let jour = new Jour({
    name: req.body.name,
    votes: 1
  });

  jour.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(jour._id);
  });
};

exports.jour_upvote = function(req, res) {
  Jour.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, jour) {
      if (err) return;
      res.send("Jour upvoted to jour :" + jour.name);
    }
  );
};
