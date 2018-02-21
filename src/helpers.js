import commands from './commands'

// if value isn't a flag, begins with - or -- then amend value
function joinArgs(args) {
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
  const args = joinArgs(process.argv.slice(2))
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