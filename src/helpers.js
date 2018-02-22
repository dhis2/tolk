import packageJson from '../package.json'
import commands from './commands'
import { getConfig } from './config'

// if value isn't a flag, begins with - or -- then amend value
function parseArgs(args) {
  const result = []
  args.forEach(v => {
    if (v.startsWith('-')) {
      result.push({
        flag: v,
        values: [],
      })
    } else {
      if (result[result.length - 1]) {
        result[result.length - 1]['values'].push(v)
      }
    }
  })

  return result
}

function findCmd(args, commands) {
  if (args.length === 0) {
    return false
  }

  const arg = args[0]

  for (const cmd of commands) {
    if (cmd.flags.includes(arg.flag)) {
      if (args.length === 1) {
        return cmd
      }

      if (args.length > 1 && cmd.children) {
        return getCmd(args.slice(1), cmd.children)
      } else {
        return false
      }
    }
  }

  return false
}

export function getCmd() {
  let args = parseArgs(process.argv.slice(2))
  if (args.length === 0) {
    args = parseArgs(['--help'])
  }

  return findCmd(args, commands)
}

function flagsMaxLen(cmds) {
  let max = 0

  for (const cmd of cmds) {
    max = Math.max(max, cmd.flags.join(', ').length)

    if (cmd.children) {
      max = Math.max(max, flagsMaxLen(cmd.children))
    }
  }

  return max
}

export const FLAGS_MAX_LEN = flagsMaxLen(commands) + 5

export function name() {
  return packageJson.name
}

export function version() {
  console.log(packageJson.version)
  process.exit(0)
}

export async function status() {
  const r = await getConfig()

  if (!r.config) {
    return
  }

  const config = r.config

  console.log('')
  if (config.auth) {
    console.log('# of auths:', config.auth.length)
  }

  if (config.server) {
    console.log('# of servers:', config.server.length)
  }

  console.log('')
  process.exit(0)
}