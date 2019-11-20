const restify = require('restify');

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
require('./routes/healthRoutes')(server);

server.listen(8080, () => {
    console.log(`${server.name} listening at ${server.url}`);
});