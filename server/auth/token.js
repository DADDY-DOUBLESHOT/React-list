const sendToken = (user, statusCode, res) => {
    const token = user.getToken(user._id);
    console.log(user._id)
    const options = {
        expires:new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    };

    res.status(statusCode).json({
        token,user,
    })
};

module.exports = sendToken;