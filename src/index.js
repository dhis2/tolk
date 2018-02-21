import { getCmd } from './helpers'

const cmd = getCmd()

if (!cmd) {
  console.error('\npootlize: invalid argument ‘', process.argv.slice(2).join(' '), '’')
  console.error('Try \'pootlize --help\' for more information\n')
  process.exit(1)
}

cmd.fn()