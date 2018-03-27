const fs = require('fs')
const path = require('path')
const lessToJs = require('less-vars-to-js')

//定制主题的样式文件用theme属性的方式（https://ant.design/docs/react/customize-theme-cn#1)-themes-%E5%B1%9E%E6%80%A7%EF%BC%88%E6%8E%A8%E8%8D%90%EF%BC%89）
module.exports = () => {
  const themePath = path.join(__dirname, './src/themes/default.less')
  return lessToJs(fs.readFileSync(themePath, 'utf8'))//将less文件转换成json
}
