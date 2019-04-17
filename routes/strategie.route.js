const express = require("express");
const router = express.Router();

const strategie_controller = require("../controllers/strategie.controller");

router.get("/:id", strategie_controller.strategie_details);
router.post("/create", strategie_controller.strategie_create);
router.put("/:id/upvote", strategie_controller.strategie_upvote);
router.get("/", strategie_controller.strategie_list);

module.exports = router;
