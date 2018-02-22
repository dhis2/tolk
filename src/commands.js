import help from './help'
import { version, status } from './helpers'

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
]

export default commands