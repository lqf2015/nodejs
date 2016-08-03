/**
 * Created by jianshan on 16/8/3.
 */

//Node应用程序中,执行异步操作的函数将回调函数作为最后一个参数,回调函数接收错误对象作为第一个参数。
var fs = require("fs");
fs.readFile('input.txt',function (err,data) {
   if(err){
       console.log(err.stack);
       return;
   } 
    console.log(data.toString());
});
console.log("程序执行完毕");

//fs.readFile()是异步函数用于读取文件。如果读取过程中发生错误,错误err对象就会输出错误信息
//没有发生错误readFile跳过err对象的输出,文件内容就通过回调函数输出。