const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res) => {
  try {
    const userId = req.user;
    const data = { userId, ...req.body };

    await Feedback.create(data);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
};
