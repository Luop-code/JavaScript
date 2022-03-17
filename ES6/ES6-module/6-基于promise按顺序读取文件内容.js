import thenFs from 'then-fs'

thenFs.readFile('./files/11.txt', 'utf8')  //返回值是promise的实例对象

    .catch((err) => {
        console.log(err.message);
    })

    .then((r1) => {    //通过  .then 为第一个promise实例指定成功之后的回调函数
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf8')
    })
    .then((r2) => {
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf8')
    })
    .then((r3) => {
        console.log(r3);
    })
