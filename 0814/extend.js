/**
 * Created by jianshan on 16/8/14.
 */
function pet(words){
    this.words = words;
    this.speak = function () {
        console.log(this.words);
    }
}
function Dog(words){
    pet.call(this,words);
}
var dog = new Dog("wang");
dog.speak();