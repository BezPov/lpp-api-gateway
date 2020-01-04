const Etcd = require('node-etcd');

const etcdData = require('../config/etcd.json');

const etcd = new Etcd(process.env.ETCD_SERVER || etcdData.url);

module.exports = etcd;