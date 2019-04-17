const express = require("express");
const router = express.Router();

const finalite_controller = require("../controllers/finalite.controller");

// router.get("/show", finalite_controller.finalite_show);
router.get("/:id", finalite_controller.finalite_details);
router.post("/create", finalite_controller.finalite_create);
router.put("/:id/upvote", finalite_controller.finalite_upvote);
router.get("/", finalite_controller.finalite_list);

module.exports = router;
