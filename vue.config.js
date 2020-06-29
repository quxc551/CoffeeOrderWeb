module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: '', //静态资源目录（js, css, img）
    lintOnSave: true, //是否开启eslint
    publicPath: '/',
    devServer: {
        proxy: {
            '/CoffeeTest': {
                target: 'http://106.13.201.225:8080', //API服务器的地址
                changeOrigin: true
            }
        }
    }
}