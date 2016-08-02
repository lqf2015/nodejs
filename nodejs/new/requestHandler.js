var querystring = require("querystring");
var exec = require("child_process").exec;
function from(response) {
    console.log("Request handler 'start' was called.");
    var body = "<html>" +
        "<head>" +
        "<meta http-equiv='content-type' content='text/html;'" +
        " charset='utf-8'/>" +
        " </head>" +
        "<body>" +
        "<form action='/upload' method='post'>" +
        "<textarea name='text' rows='20' cols='60'></textarea>" +
        "<input type='submit' value='Sumbit text'> " +
        "</form>" +
        "</body>" +
        "</html>";
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(body);
    response.end();
}
function start(response) {
    console.log("Request handler 'start' was called.");

    exec("ls -lah",function (error,stdout,stderr) {
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
    //测试阻塞
    // exec("find /",
    //     {timeout:10000,maxBuffer:20000*1024},
    //     function (error,stdout,stderr) {
    //     response.writeHead(200,{"Content-Type":"text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
}
function upload(response,postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    // response.write("You've sent the text:" + postData);
    response.write("You've sent the text:" + querystring(postData).text);
    response.end();
}
exports.from = from;
exports.start = start;
exports.upload = upload;