const axios = require('axios');

const initRoutes = function (server) {
    server.get('/test', function (req, res, next) {
        axios.get('http://lpp-account-service')
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