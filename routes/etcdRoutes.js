const logger = require('./services/logging');

const initRoutes = function (server) {
    logger.info('Accessed etcd route');

    server.get('/etcd', function (req, res, next) {
        require('../services/etcd').get("firstValue", (err, etcdResponse) => {
            res.json(etcdResponse);

            return next();
        });
    });
};

module.exports = initRoutes;