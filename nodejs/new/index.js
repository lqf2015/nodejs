/**
 * Created by jianshan on 16/7/29.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/from"]=requestHandlers.from;
//相应扩展index.js,使得路由函数被注入到服务器
server.start(router.route,handle);