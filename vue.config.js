module.exports = {
    lintOnSave: false,
    //配置代理服务器
    devServer: {
        proxy: {
          '/api': {
            target: 'http://39.98.123.211',
            // pathRewrite: { '^/api': '' },
          },
        },
    }
}
