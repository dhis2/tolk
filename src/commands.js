import help from './help'
import { version, status } from './helpers'
import { pull, push } from './sync'

const commands = [
  {
    fn: help,
    name: 'help',
    label: 'Help',
    flags: ['-h', '--help'],
    help: 'Print usage information.',
  },

  {
    fn: version,
    name: 'version',
    label: 'Version',
    flags: ['-v', '--version'],
    help: 'Show version information.',
  },

  {
    fn: status,
    name: 'status',
    label: 'Status',
    flags: ['-x', '--status'],
    help: 'Show status.',
  },

  {
    fn: pull,
    name: 'pull',
    label: 'Pull',
    flags: ['-p', '--pull'],
    help: 'Pull a project.',
  },

  {
    fn: push,
    name: 'push',
    label: 'Push',
    flags: ['-p', '--push'],
    help: 'Push a project.',
  },
]

export default commands
