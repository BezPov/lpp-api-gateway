const initRoutes = function (server) {
    server.get('/info', function (req, res, next) {
        res.json({
            members: ['np9417', 'lb']
        });

        return next();
    });
};

module.exports = initRoutes;