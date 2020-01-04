const winston = require('winston');

require('winston-logstash');

try {
    const logitData = require('../config/logit-io-config');

    winston.add(winston.transports.Logstash, logitData);
} catch (ex) {
    console.log("[Winston] Not running in production");
}

module.exports = winston;