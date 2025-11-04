const User = require("../models/User");

exports.savePreferences = async (req, res) => {
  try {
    const userId = req.userId;
    const { cryptoAssets, investorType, contentTypes } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { preferences: { cryptoAssets, investorType, contentTypes } },
      { new: true }
    );

    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, msg: err.message });
  }
};
