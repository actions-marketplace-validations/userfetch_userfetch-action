const process = require('process')
const core = require('@actions/core')
const userfetch = require('userfetch').main

try {
  const configPath = core.getInput('config')
  const svgPath = core.getInput('svg')
  const config = require(path.resolve(process.cwd(), configPath))
  userfetch(
    {
      user: '',
      svg: svgPath,
    },
    process.env,
    config
  )
} catch (error) {
  core.setFailed(error.message)
}
