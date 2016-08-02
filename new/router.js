//在/upload展示用户输入的内容,要实现该功能,需要将postData传递给请求处理程序,
// 然后在requestHandler.js
function route(handle,pathname,response,postData) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response,postData)
    }
    else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;