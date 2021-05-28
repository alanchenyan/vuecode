
import helloWorld from "./hello.js"

var nickname = "AlanChen";

function test(){
    console.log("Hello "+nickname);
}

// 测试

//有导出，可以访问
helloWorld();

//没有导出，无法访问
console.log(helloTitle);