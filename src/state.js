import { observe } from "./observe/index"

export default function initState(vm) {
    const opts = vm.$options
    if (opts.data) {
        initData(vm)
    }
}

function initData(vm) {
    let data = vm.$options.data  // data可能是函数也可能是对象
    data = typeof data === 'function' ? data.call(vm) : data
    vm._data = data
    // 对数据进行劫持
    observe(data)

    // 将vm._data用vm来代理
    for (let key in data) {
        proxy(vm, '_data', key)
    }
}

function proxy(vm, target, key) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[target][key]
        },

        set(newValue) {
            vm[target][key] = newValue
        }
    })
}