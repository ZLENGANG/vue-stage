import initState from "./state"

export function initMixin(Vue) { // 给Vue增加init方法
    Vue.prototype._init = function (options) { //初始化操作
        const vm = this

        // 挂载用户的配置到示例的$options属性上
        vm.$options = options

        // 初始化状态
        initState(vm)
    }
}


