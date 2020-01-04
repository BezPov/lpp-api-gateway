const axios = require('axios');

const initRoutes = function (server) {
    server.get('/test', function (req, res, next) {
        axios.get('lpp-account-service.default.svc.cluster.local/metrics')
            .then(response => {
                res.json(response);

                return next();
            })
            .catch(error => {
                res.send(500, error);

                return next();
            });
    });
};

module.exports = initRoutes;