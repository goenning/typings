#!/usr/bin/env node

import minimist = require('minimist')
import columnify = require('columnify')
import { info } from '../typings'
import { loader } from '../utils/cli'
import { PROJECT_NAME } from '../utils/config'

interface Args {
  name: string
  source: string
  verbose: boolean
  help: boolean
}

const args = minimist<Args>(process.argv.slice(2), {
  boolean: ['verbose', 'help']
})

if (args.help) {
  console.log(`
${PROJECT_NAME} info [source] [name]
`)

  process.exit(0)
}

const { verbose, name, source, ambient } = args

loader(info(args._[0], args._[1]), { verbose })
  .then(function (result) {

    if (result) {
      console.log(`Versions for ${result.source}:${result.name}`)
      console.log()
      console.log(columnify(result.versions))
    } else {
      console.log(`No typings found for ${result.source}:${result.name}`)
      return
    }

  })
