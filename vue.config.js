// vue.config.js
module.exports = {
  // devServer: {
  //   // 设置代理
  //   // 设置主机地址
  //   host: 'localhost',
  //   // 设置默认端口
  //   port: 8080,
  //   proxy: {
  //     "/": {
  //       // target: "http://10.212.1.205:7001/", // 域名
  //       ws: false, // 是否启用websockets
  //       changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       // pathRequiresRewrite: {
  //       //   "^/v1": "/"
  //       // }
  //     }
  //   }
  // },
  pluginOptions: {
    karma: {
      files: [
        'tests/**/*.spec.ts',
        // 'src/components/**/*',
      ],
      karmaConfig: {
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
          ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
          }
        },
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
          dir: './tests/unit/coverage',
          reporters: [{
            type: 'lcov',
            subdir: '.'
          },
          {
            type: 'text-summary'
          }
          ]
        }
      }
    }
  }
}