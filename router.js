/**
 * Created by jianshan on 16/7/29.
 */

// function route(handle,pathname) {
//     console.log("About to route a request for " + pathname);
//     if (typeof handle[pathname] === 'function'){
//         handle[pathname]();
//     }else{
//         console.log("No request handler found for " + pathname);
//     }
// }

//不好的方式  当未来有应用进行非组塞得操作的时候,我们的应用就挂了。
function route(handle,pathname) {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function'){
       return handle[pathname]();
    }else{
        console.log("No request handler found for " + pathname);
        return "404 Not found";
    }
}
exports.route = route;



//1.
// function route(pathName){
//     console.log("About to route a request for " + pathName);
// }
// exports.route = route;