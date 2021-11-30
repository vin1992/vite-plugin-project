const path = require('path')
const chalk = require('chalk')
const lsrTool = require('@mf2e/lsr-tool')

async function lsr() {
  console.log(chalk.bold.yellow('正在生成首屏预渲染...'))
  await lsrTool.buildTemplate({
    dir: path.join(__dirname, '../dist'),
    routes: [
      {
        html: 'index.html',
      },
    ],
  })
}

lsr()
