import thenFs from 'then-fs'


//调用then-fs提供的readFile方法，可以异步读取文件内容，它的返回值是Promise的实例对象
thenFs.readFile('./files/1.txt', 'utf8').then((r1) => { console.log(r1); })
thenFs.readFile('./files/2.txt', 'utf8').then((r2) => { console.log(r2); })
thenFs.readFile('./files/3.txt', 'utf8').then((r3) => { console.log(r3); })