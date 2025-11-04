const router = require("express").Router();
const auth = require("../middleware/auth");
const { submitFeedback } = require("../controllers/feedback.controller");

router.post("/", auth, submitFeedback);

module.exports = router;
