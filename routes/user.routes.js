const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const { savePreferences } = require("../controllers/user.controller");

router.post("/preferences", verifyToken, savePreferences);

module.exports = router;
