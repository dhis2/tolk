import { getCmd, name } from './helpers'

const cmd = getCmd()

if (!cmd) {
  console.error(`
${name()}: invalid argument ‘${process.argv.slice(2).join(' ')}’
Try 'tolk --help' for more information
`)
  process.exit(1)
}

cmd.fn()