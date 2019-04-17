const express = require("express");
const router = express.Router();

const acquis_controller = require("../controllers/acquis.controller");

// router.get("/show", acquis_controller.acquis_show);
router.get("/:id", acquis_controller.acquis_details);
router.post("/create", acquis_controller.acquis_create);
router.put("/:id/upvote", acquis_controller.acquis_upvote);
router.get("/", acquis_controller.acquis_list);

module.exports = router;
