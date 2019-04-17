const express = require("express");
const router = express.Router();

const revendication_controller = require("../controllers/revendication.controller");

// router.get("/show", revendication_controller.revendication_show);
router.get("/:id", revendication_controller.revendication_details);
router.post("/create", revendication_controller.revendication_create);
router.put("/:id/upvote", revendication_controller.revendication_upvote);
router.get("/", revendication_controller.revendication_list);

module.exports = router;
