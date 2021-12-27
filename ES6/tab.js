var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);

        this.add = this.main.querySelector('.tabadd');

        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // 初始化，让相关元素绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.tonggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    // 获取最新的所有的li，section，guanbi
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 1-切换功能
    tonggleTab() {
        // console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 2-添加功能
    addTab() {
        that.clearClass();
        // 创建li，section元素，追加到父元素
        var random = Math.random();
        var li = ' <li class="liactive"><span>新选项</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试1 ' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3-删除功能
    removeTab(e) {
        e.stopPropagation();//阻止冒泡，防止触发li的切换点击事件
        var index = this.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li和section,remove()方法可以直接删除元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当我们删除的不是选中状态的那个li，让原先选中状态的li保持不变
        if (document.querySelector('.liactive')) {
            return;
        } else if (index == 0) {
            return that.lis[index] && that.lis[index].click();
        }

        // 当我们删除该li，让前一个li处于选中状态
        index--;
        // 手动调用点击事件
        that.lis[index] && that.lis[index].click();
    }
    // 4-修改功能
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.Selection.empty();

        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();//文本框的文字处于选定状态

        // 离开文本框，把里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以把文本框的值给span
        input.onkeyup = function (e) {
            if (e.key === "Enter") {
                // 手动调用失去焦点事件
                this.blur();
            }
        }
    }
}

new Tab('#tab');
