import help from './help'

const commands = [
  {
    fn: help,
    name: 'help',
    label: 'Help',
    flags: ['-h', '--help'],
    help: 'Print usage information.',
  },

  {
    name: 'version',
    label: 'Version',
    flags: ['-v', '--version'],
    help: 'Show version information.',
  },

  {
    name: 'status',
    label: 'Status',
    flags: ['-x', '--status'],
    help: 'Show status, Pootle server in use. Num. of server etc.',
  },

  {
    name: 'server',
    label: 'Server',
    flags: ['-s', '--server'],
    defaultValue: 'list',
    help: 'Pootle server',
    children: [
      {
        name: 'add',
        label: 'Add',
        flags: ['-a', '--add'],
        help: 'Add a Pootle server using user / password.',
      },
      {
        name: 'remove',
        label: 'Remove',
        flags: ['-r', '--remove'],
        help: 'Remove a Pootle server.',
      },
      {
        name: 'list',
        label: 'List',
        flags: ['-l', '--list'],
        help: 'List all Pootle servers.',
      },
    ],
  },
]

export default commands