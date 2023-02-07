class Observer {
    constructor(data) {
        // Object.defineProperty只能劫持已经存在的属性（vue里面会为此单独写一些api如$set $detele）
        this.walk(data)
    }

    // 循环对象 对属性依次劫持
    walk(data) {
        Object.keys(data).forEach(key => defineReactive(data, key, data[key]))
    }
}

export function defineReactive(target, key, value) {
    observe(value)
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue === value) return
            value = newValue
        }
    })
}


export function observe(data) {
    // 对对象进行劫持
    if (typeof data !== 'object' || data == null) {
        return
    }
    // 若被劫持就不需要被劫持

    return new Observer(data)
}