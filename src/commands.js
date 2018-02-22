import help from './help'
import { version } from './helpers'

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
    name: 'status',
    label: 'Status',
    flags: ['-x', '--status'],
    help: 'Show status.',
  },
]

export default commands