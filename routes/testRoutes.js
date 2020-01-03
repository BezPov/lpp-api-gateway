const initRoutes = function (server) {
    server.get('/test', function (req, res, next) {
        res.json({
            "status": "Update successful"
        });

        return next();
    });
};

module.exports = initRoutes;