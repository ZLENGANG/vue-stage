// vue不用class是因为所有方法都耦合在一起，不好管理

import { initMixin } from "./init"

function Vue(options) {
    this._init(options)
}

initMixin(Vue)


export default Vue