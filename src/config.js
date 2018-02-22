import os from 'os'
import fs from 'fs'
import path from 'path'

import xml2js from 'xml2js'
const xmlParser = new xml2js.Parser()

export function configPath() {
  return path.join(os.homedir(), '.tolk')
}

export function getConfig() {
  const p = configPath()
  if (!fs.existsSync(p)) {
    console.error(`
Create .tolk file in xml format in your home directory (~/.tolk).

Example:

  <?xml version="1.0" encoding="UTF-8"?>
  <config>
    <!-- Authorizations -->
    <auth name="dhis2" type="pootle" username="username" password="password" />
    
    <!-- Servers -->
    <server ref="dhis2" url="http://translate.dhis2.org/" apiVersion="v1" />
  </config>

`)
    process.exit(1)
  }

  const config = fs.readFileSync(p, 'utf8')
  return new Promise((resolve, reject) => {
    xmlParser.parseString(config, (err, data) => {
      if (err) {
        console.error(err)
        return process.exit(1)
      }

      resolve(data)
    })
  })
}