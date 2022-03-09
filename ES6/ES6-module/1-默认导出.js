let n1 = 10
let n2 = 20
function show() { }

//每个模块中，只允许使用唯一一次export default，否则会报错
export default {
    n1,
    show
}