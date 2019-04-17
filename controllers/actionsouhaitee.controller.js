const Actionsouhaitee = require("../models/actionsouhaitee.model");

exports.actionsouhaitee_details = function(req, res) {
  Actionsouhaitee.findById(req.params.id, function(err, actionsouhaitee) {
    if (err) return;
    res.send(actionsouhaitee);
  });
};

exports.actionsouhaitee_list = function(req, res) {
  Actionsouhaitee.find({})
    .sort({ votes: "desc" })
    .then(function(actionsouhaitee) {
      res.json(actionsouhaitee);
    });
};

exports.actionsouhaitee_create = function(req, res) {
  let actionsouhaitee = new Actionsouhaitee({
    name: req.body.name,
    votes: 1,
    impact: req.body.impact,
    effort: req.body.effort
  });

  actionsouhaitee.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(actionsouhaitee._id);
  });
};

exports.actionsouhaitee_upvote = function(req, res) {
  Actionsouhaitee.findById(req.params.id, function(err, actionrecherchee) {
    if (err) return;

    var actionEffort = actionrecherchee.effort;
    var actionImpact = actionrecherchee.impact;
    var actionVotes = actionrecherchee.votes;

    Actionsouhaitee.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          effort:
            (req.body.effort + actionEffort * actionVotes) / (actionVotes + 1),
          impact:
            (req.body.impact + actionImpact * actionVotes) / (actionVotes + 1),
          votes: actionVotes + 1
        }
      },
      function(err, actionsouhaitee) {
        if (err) {
          return;
        }
        res.send(actionsouhaitee._id);
      }
    );
  });
};
