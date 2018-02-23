import { getConfig } from './config'

export async function getAuth(name) {
  const { auth } = await getConfig()

  if (!Array.isArray(auth)) {
    const v = Object.values(auth)[0]
    return v.name === name ? v : false
  }

  for (const obj of auth) {
    const val = Object.values(obj)[0]
    if (val.name === name) {
      return val
    }
  }

  return false
}

export async function getServer(name) {
  const { server } = await getConfig()

  if (!Array.isArray(server)) {
    const v = Object.values(server)[0]
    return v.name === name ? v : false
  }

  for (const obj of server) {
    const val = Object.values(obj)[0]
    if (val.name === name) {
      return val
    }
  }

  return false
}