// rollup默认导出一个对象，作为打包配置文件
import babel from 'rollup-plugin-babel'
export default {
    input: "./src/index.js",
    output: {
        file: './dist/vue.js',
        name: "Vue",
        format: 'umd',  // esm|es6模块|commonjs模块|umd
        sourcemap: true // 可调试源代码
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        })
    ]
}