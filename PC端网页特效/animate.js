function animate(obj, target, callback) {
    console.log(callback);
    // 让元素只有一个定时器执行
    clearInterval(obj.timer)
    // 给不同元素指定不同定时器
    obj.timer = setInterval(function () {
        // 步长值写在定时器里面
        // 把步长值改为整数
        // var step = Math.ceil((target - obj.offsetLeft) / 10)

        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            // 停止动画，本质是停止定时器
            clearInterval(obj.timer)
            // 回调函数写在定时器里面
            if (callback) {
                callback()
            }
        } else {
            // 每次的距离慢慢变小 （目标位置-当前位置）/ 10
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 30)
}