const express = require("express");
const router = express.Router();

const actionsouhaitee_controller = require("../controllers/actionsouhaitee.controller");

router.get("/:id", actionsouhaitee_controller.actionsouhaitee_details);
router.post("/create", actionsouhaitee_controller.actionsouhaitee_create);
router.put("/:id/upvote", actionsouhaitee_controller.actionsouhaitee_upvote);
router.get("/", actionsouhaitee_controller.actionsouhaitee_list);

module.exports = router;
