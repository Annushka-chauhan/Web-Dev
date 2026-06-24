function auth(req, res, next) {
    const token = req.headers.token;

    if (!token) {
        return res.status(403).json({
            message: "You are not logged in"
        });
    }

    try {
        const decoded = jwt.verify(token, "Annu123");

        req.username = decoded.username;

        next();
    } catch (err) {
        return res.status(403).json({
            message: "Invalid token"
        });
    }
}