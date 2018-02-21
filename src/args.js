import { ArgumentParser } from 'argparse'

const argParser = new ArgumentParser({
  version: '1.0.0',
  addHelp: true,
  description: 'Communicate with Pootle servers, push/pull translations.',
})

argParser.addArgument(['-a', '--auth'], {
  help: 'authorize against a pootle server.',
})

export default argParser
