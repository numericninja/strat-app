const Acquis = require("../models/acquis.model");

//Simple version, without validation or sanitation
// exports.acquis_show = function(req, res) {
//   res.send("Greetings from the Acquis controller!");
// };

exports.acquis_details = function(req, res) {
  Acquis.findById(req.params.id, function(err, acquis) {
    if (err) return;
    res.send(acquis);
  });
};

exports.acquis_list = function(req, res) {
  Acquis.find({})
    .sort({ votes: "desc" })
    .then(function(acquis) {
      res.json(acquis);
    });
};

exports.acquis_create = function(req, res) {
  let acquis = new Acquis({
    name: req.body.name,
    votes: 1
  });

  acquis.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(acquis._id);
  });
};

exports.acquis_upvote = function(req, res) {
  Acquis.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { votes: 1 } },
    function(err, acquis) {
      if (err) return;
      res.send("Acquis upvoted to acquis :" + acquis.name);
    }
  );
};
