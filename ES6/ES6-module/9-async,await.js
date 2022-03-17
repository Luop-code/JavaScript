import thenFs from "then-fs";

console.log('A');
async function getAllFile() {

    console.log('B');
    //如果一个方法返回值是promise实例，就可以在前面加await，而且方法(function)前必须加async
    //在 async方法中，第一个await之前的代码会同步执行，await之后的代码异步执行

    const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
    console.log(r3);
    console.log('D');
}

getAllFile()
console.log('C');