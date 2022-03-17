import thenFs from 'then-fs'

const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8')
]

//该方法会发起并行的Promise异步操作，等所有的异步操作结束后，才会执行下一步的.then
/* Promise.all(promiseArr).then(result => {
    console.log(result);
})
 */

//该方法是只要任何一个异步操作哦完成，就立即执行下一步.then操作（赛跑机制）
Promise.race(promiseArr).then(result => {
    console.log(result);
})