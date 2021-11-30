const fs = require('fs')
const path = require('path')

function repaceCode(fpath) {
  let content = fs.readFileSync(fpath, { encoding: 'utf-8' })
  content = content.replace(/['|"]use strict['|"];/, '')
  fs.writeFileSync(fpath, content, { encoding: 'utf-8' })
}

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

const files = findFiles('dist', path.resolve('dist'))
for (const file of files) {
  if (/polyfill.*\.js$/.test(file)) {
    repaceCode(file)
  }
}
