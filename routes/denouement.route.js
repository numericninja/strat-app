const express = require("express");
const router = express.Router();

const denouement_controller = require("../controllers/denouement.controller");

// router.get("/show", denouement_controller.denouement_show);
router.get("/:id", denouement_controller.denouement_details);
router.post("/create", denouement_controller.denouement_create);
router.put("/:id/upvote", denouement_controller.denouement_upvote);
router.get("/", denouement_controller.denouement_list);

module.exports = router;
