const Actionpeusouhaitee = require("../models/actionpeusouhaitee.model");

exports.actionpeusouhaitee_details = function(req, res) {
  Actionpeusouhaitee.findById(req.params.id, function(err, actionpeusouhaitee) {
    if (err) return;
    res.send(actionpeusouhaitee);
  });
};

exports.actionpeusouhaitee_list = function(req, res) {
  Actionpeusouhaitee.find({})
    .sort({ votes: "desc" })
    .then(function(actionpeusouhaitee) {
      res.json(actionpeusouhaitee);
    });
};

exports.actionpeusouhaitee_create = function(req, res) {
  let actionpeusouhaitee = new Actionpeusouhaitee({
    name: req.body.name,
    votes: 1,
    impact: req.body.impact,
    effort: req.body.effort
  });

  actionpeusouhaitee.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }
    res.send(actionpeusouhaitee._id);
  });
};

exports.actionpeusouhaitee_upvote = function(req, res) {
  Actionpeusouhaitee.findById(req.params.id, function(err, actionrecherchee) {
    if (err) return;

    var actionEffort = actionrecherchee.effort;
    var actionImpact = actionrecherchee.impact;
    var actionVotes = actionrecherchee.votes;

    Actionpeusouhaitee.findOneAndUpdate(
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
      function(err, actionpeusouhaitee) {
        if (err) {
          return;
        }
        res.send(actionpeusouhaitee._id);
      }
    );
  });
};
