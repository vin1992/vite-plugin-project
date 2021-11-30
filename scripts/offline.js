const pkg = require('../package.json')
const chalk = require('chalk')
const offlineTool = require('@mf2e/offline-tool')

async function offline() {
  console.log(chalk.bold.yellow('正在发布离线包...'))
  await offlineTool.build(
    [
      {
        name: pkg.name,
        description: pkg.description,
        url: [pkg.homepage],
        srcDir: './dist/index.html',
        apiList: [],
      },
    ],
    'production'
  )
  console.log(chalk.green('✔') + ' 已发布~')
}

offline()
