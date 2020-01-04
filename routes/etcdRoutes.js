const initRoutes = function (server) {
    server.get('/etcd', function (req, res, next) {
        require('../services/etcd').get("firstValue", (err, etcdResponse) => {
            res.json(etcdResponse);

            return next();
        });
    });
};

module.exports = initRoutes;