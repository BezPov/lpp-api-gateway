const axios = require('axios');

const initRoutes = function (server) {
    server.get('/test', function (req, res, next) {
        axios.get('lpp-account-service')
            .then(response => {
                console.log(response);
                
                res.json(response.data);

                return next();
            })
            .catch(error => {
                res.send(500, error);

                return next();
            });
    });
};

module.exports = initRoutes;