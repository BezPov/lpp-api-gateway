const restify = require('restify');

const winston = require('winston');
require('winston-logstash');

winston.add(winston.transports.Logstash,
    {
        port: 16678,
        host: 'bc4b617c-fe4d-4d3a-994e-08e84919e17d-ls.logit.io',
        ssl_enable: true,
        max_connect_retries: -1
    }
);

const server = restify.createServer({
    name: 'lpp-api-gateway',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/', (req, res, next) => {
    res.json({
        name: 'lpp-api-gateway',
        version: '1.0.0',
        description: 'Api gateway'
    });

    return next();
});

require('./routes/infoRoutes')(server);
require('./routes/testRoutes')(server);
require('./routes/healthRoutes')(server);

server.listen(8080, () => {
    console.log(`${server.name} listening at ${server.url}`);

    winston.log(`${server.name} listening at ${server.url}`);
});