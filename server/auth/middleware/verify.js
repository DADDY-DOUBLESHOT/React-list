const jwt = require("jsonwebtoken");
const User = require("../../Models/user");

exports.VerifyUser = async (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
      return res.send("Not logged in", 401);
    }

    const dtoken = jwt.verify(token, process.env.KEY);

    req.user = await User.findById(dtoken.id);
    console.log('success token')
    next();
  } catch (error) {
    return res.send("Invalid token", 401);
  }
};
