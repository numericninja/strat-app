const express = require("express");
const router = express.Router();

const actionpeusouhaitee_controller = require("../controllers/actionpeusouhaitee.controller");

router.get("/:id", actionpeusouhaitee_controller.actionpeusouhaitee_details);
router.post("/create", actionpeusouhaitee_controller.actionpeusouhaitee_create);
router.put(
  "/:id/upvote",
  actionpeusouhaitee_controller.actionpeusouhaitee_upvote
);
router.get("/", actionpeusouhaitee_controller.actionpeusouhaitee_list);

module.exports = router;
