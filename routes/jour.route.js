const express = require("express");
const router = express.Router();

const jour_controller = require("../controllers/jour.controller");

router.get("/:id", jour_controller.jour_details);
router.post("/create", jour_controller.jour_create);
router.put("/:id/upvote", jour_controller.jour_upvote);
router.get("/", jour_controller.jour_list);

module.exports = router;
