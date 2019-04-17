const Finalite = require("../models/finalite.model");

//Simple version, without validation or sanitation
// exports.finalite_show = function(req, res) {
//   res.send("Greetings from the Finalite controller!");
// };

exports.finalite_details = function(req, res) {
  Finalite.findById(req.params.id, function(err, finalite) {
    if (err) return;
    res.send(finalite);
  });
};

exports.finalite_list = function(req, res) {
  Finalite.find({})
    .sort({ votes: "desc" })
    .then(function(finalite) {
      res.json(finalite);
    });
};

exports.finalite_create = function(req, res) {
  let finalite = new Finalite({
    name: req.body.name,
    votes: 1
  });

  finalite.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(finalite._id);
  });
};

exports.finalite_upvote = function(req, res) {
  Finalite.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, finalite) {
      if (err) return;
      res.send("Finalite upvoted to finalite :" + finalite.name);
    }
  );
};
