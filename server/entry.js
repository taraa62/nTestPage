const Server = require("./src/server/ServerTestPage");

process.env.NODE_ENV = (process.argv.indexOf("--dev")===-1)?"production":"test";
Server.inst = new Server();
