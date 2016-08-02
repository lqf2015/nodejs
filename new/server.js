var http = require("http");
var url = require("url");
function start(route,handle) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;

        console.log("Request for " + pathname + " received");

        request.setEncoding("utf8");  //设置接收数据的格式
         //注册data时间用于手机每次接收到的新数据块,并将其赋值给postData
        request.addListener("data",function (postDataChunk) {
           posData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });
       //最后请求路由的调用一道end事件处理程序中,确保只会当所有数据接收完毕后才触发
        request.addListener("end",function () {
           route(handle,pathname,response,posData); 
        });

        // route(handle,pathname,response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server is started");
}
exports.start = start;