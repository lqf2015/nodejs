/**
 * Created by jianshan on 16/7/29.
 */
var http = require("http");    //node 自带的http模块赋值给本地变量
var url = require("url");
// function start(route,handle) {
//     function onRequest(request,response) {
//         var pathname = url.parse(request.url).pathname;       //浏览器请求的url路径  通过路径来区别不同的请求
//                                                               // 得以使用路由来讲请求一URl路径为基准映射到处理程序上
//         console.log('Request for ' + pathname + ' received');
//        
//         route(handle,pathname);                                      //传递路由函数
//        
//         response.writeHead(200,{"Content-Type":"text/plain"});//发送一个http状态码和http头的内容类型。
//         response.write("Hello world");                        //在http相应的主题中发送文本
//         response.end();                                       //完成响应
//     }
//     http.createServer(onRequest).listen(8811);
//     console.log("server is started");
// }

//不好的方式,当未来有请求处理程序需要进行阻塞得操作时,应用就挂了
function start(route,handle) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;       
                                                              
        console.log('Request for ' + pathname + ' received');
        
        response.writeHead(200,{"Content-Type":"text/plain"});
        //将请求处理程序通过路由返回的内容响应给浏览器
        var content = route(handle,pathname);

        response.write(content);                        
        response.end();                                       
    }
    http.createServer(onRequest).listen(8888);
    console.log("server is started");
}
exports.start = start;                         //exports : 输出 出口。
