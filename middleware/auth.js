const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const token_0 = authHeader && authHeader.split(" ")[1];
  const pattern = /[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+/;
  const match = token_0 && token_0.match(pattern);
  const token = match && match[0];

  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
