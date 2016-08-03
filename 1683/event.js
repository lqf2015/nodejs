/**
 * Created by jianshan on 16/8/3.
 */

//events模块只提供了一个对象:events.EventEmitter 。EventEmitter的核心就是事件触发与时间监听器功能的封装
//EventEmitter对象如果在实例化是发生错误,会触发'error'事件。
// 当添加新的监听器时,'newlistener'事件会触发,当移除时候'removelistener'事件被触发。

//EventEmitter 的属性,on用于绑定事件函数,emit属性用于触发一个事件

var eventEmitter = require("events").EventEmitter;
var event = new eventEmitter();
event.on('some_event',function(){
    console.log('some_event 事件触发');
});
setTimeout(function () {
    event.emit('some_event');
});

//原理是event对象注册了事件some_event的一个监听器,然后我们通过setTimeout在1秒后向对象发送事件some_event,
// 此时会调用some_event监听器

EventEmitter的每个事件名和若干个参数组成,事件名是一个字符串,通常表达一定的语义,对于每个时间
event.on("someEvent",function (arg1,arg2) {
    console.log('listener1',arg1,arg2);
});
event.on("someEvent",function (arg1,arg2) {
   console.log("listener",arg1,arg2) 
});
event.emit("someEvent","arg参数1","arg参数2");