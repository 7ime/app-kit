const path = require('path')
const fs = require('fs')

const paths = require('./paths')

const appDirectory = fs.realpathSync(process.cwd())

const resolvePath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
    resolvePath,
    appDirectory
}
