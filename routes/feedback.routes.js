const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const { submitFeedback } = require("../controllers/feedback.controller");

router.post("/", verifyToken, submitFeedback);

module.exports = router;
