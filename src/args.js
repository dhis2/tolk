import { ArgumentParser } from 'argparse'

const argParser = new ArgumentParser({
  version: '1.0.0',
  addHelp: true,
  description: 'Communicate with Pootle servers, push/pull translations.',
})

// Authorization
const authParser = argParser.addSubparsers({
    title: 'Server',
    dest: 'server',
    help: 'add/remove or list pootle servers.'
})

const auth = authParser.addParser('server', {
    addHelp: true,
    aliases: ['s']
})

auth.addArgument(
    ['-a', '--add'],
    {
        action: 'storeTrue',
        help: 'add pootle server by authorizing'
    }
)

auth.addArgument(
    ['-r', '--remove'],
    {
        type: 'int',
        action: 'store',
        help: 'remove a pootle server, using index. Find index from server list.'
    }
)

auth.addArgument(
    ['-l', '--list'],
    {
        action: 'storeTrue',
        help: 'authorize user against a pootle server.'
    }
)

export default argParser
