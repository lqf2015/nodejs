//创建一个模块,并对每一个请求处理程序,添加一个占位用函数,随后将这些函数作为模块的方法导出。
//这样可以吧请求处理程序和路由模块连接起来,
// function start() {
//     console.log("Request handler 'start' was called.");
// }
// function upload() {
//     console.log("Request handler 'upload' was called");
// }


//不好的方式 当未来有请求处理程序进行非阻塞得操作的时候,我们的应用就挂了;
// function start() {
//     console.log("Request handler 'start' was called.");
//     function sleep(duration) {
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime + duration);
//     }
//     sleep(10000);
//     return "Hello Start";
// }
// function upload() {
//     console.log("Request handler 'upload' was called");
//     return "Hello Upload"
// }
// exports.start = start;
// exports.upload = upload;

//错误的使用非阻塞操作的方式

var exec= require("child_progress").exec();   //新的模块child_progress 实现一个简单又实用的非阻塞操作exec();
//exec() 它从NodE.js来执行一个shell命令,在上述例子中,我们从来获取当前目录下所有的文件("ls-lah"),
//然后当startUR请求的时候将文件嘻嘻输出到浏览器中;

function start() {
    console("Request handler 'start' was called");
    var content = "empty";
    
    exec("ls -lah",function (error,stdout,stderr) {
        content = stdout;
    });  //执行ls -lah 命令,将结果赋值费content,最后将content返回。
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.")
    return "HEllo Upload"
}
exports.start = start;
exports.upload = upload;


