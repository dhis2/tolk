import { getCmd, name } from './helpers'

const result = getCmd()

if (!result) {
  console.error(`
${name()}: invalid argument ‘${process.argv.slice(2).join(' ')}’
Try 'tolk --help' for more information
`)
  process.exit(1)
}

const [cmd, arg] = result
cmd.fn(arg)