const pkg = require('../package.json')
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const inquirer = require('inquirer')
const Uploader = require('@newap/uploader')
const minimist = require('minimist')

function findFiles(rootPath, replacePath = '') {
  let result = []

  function finder(tempPath) {
    let files = fs.readdirSync(tempPath)
    files.forEach((val) => {
      let fPath = path.posix.join(tempPath, val)
      let stats = fs.statSync(fPath)

      if (stats.isDirectory()) {
        finder(fPath)
      } else if (stats.isFile() && !/DS_Store/.test(fPath)) {
        result.push(fPath.replace(rootPath, replacePath))
      }
    })
  }

  finder(rootPath)
  return result
}

function getCacheFiles() {
  const cachePath = path.resolve('node_modules/@newap/uploader/cache-files.json')
  return fs.pathExistsSync(cachePath) ? fs.readJsonSync(cachePath, { encoding: 'utf-8' }) : []
}

function saveCacheFiles(files) {
  const cachePath = path.resolve('node_modules/@newap/uploader/cache-files.json')
  fs.outputJsonSync(cachePath, files, { encoding: 'utf-8' })
}

async function uploadStatic() {
  console.log(chalk.bold.yellow('正在上传static...'))

  const allFiles = findFiles(`dist/static/`)
  const cacheFiles = getCacheFiles()

  await new Uploader({
    dir: './dist/static',
    target: `static/newsapp/${pkg.name}/static`,
    exclude: cacheFiles.map((item) => new RegExp(path.basename(item))),
  }).run()

  saveCacheFiles(allFiles)
}

async function uploadHtml() {
  console.log(chalk.bold.yellow('正在上传html...'))

  await Promise.all(
    targets.map(async (target) => {
      await new Uploader({
        dir: './dist',
        target: `${target}/newsapp/${pkg.name}`,
        include: [/.*\.html/, /favicon\.ico/, /service-worker\.js/],
        htmlDefaultPath: false,
      }).run()
    })
  )
}

let targets = []
async function upload() {
  if (process.argv.length > 2) {
    const args = minimist(process.argv.slice(2))
    targets = args.targets.split(',')
  } else {
    const answer = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'targets',
        message: `请选择上传目标：`,
        choices: [
          {
            name: chalk.bold.yellow('测试环境'),
            value: 'test',
          },
          {
            name: chalk.bold.yellow('线上环境'),
            value: 'html',
          },
        ],
        validate(input) {
          if (input.length === 0) {
            return '请至少选择一项'
          }
          return true
        },
      },
    ])
    targets = answer.targets
  }

  await uploadStatic()
  await uploadHtml()
}

upload()
