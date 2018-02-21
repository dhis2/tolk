import commands from './commands'
import { FLAGS_MAX_LEN, name } from './helpers'


function printCmds(cmds, indent) {
  let flags
  for (const cmd of cmds) {
    flags = ' '.repeat(indent * 2) + cmd.flags.join(', ')
    console.log(flags.padEnd(FLAGS_MAX_LEN) + cmd.help)

    if (cmd.children && cmd.children.length > 0) {
      printCmds(cmd.children, indent + 1)
    }
  }
}

export default function help() {
  console.log(`Usage: ${name()} [args]

Arguments:
`)
  printCmds(commands, 0)
  console.log('')
  process.exit(0)
}
