const sendCookie = function (token) {
    res.cookie("Token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: true,
        secure: true
      });
    }
    
    module.exports = sendCookie;