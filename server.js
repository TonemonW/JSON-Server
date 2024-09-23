const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// 使用本地的 db.json 文件
const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use(middlewares);
server.use(router);

// 导出 server 供 Vercel 使用
module.exports = server;