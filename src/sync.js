import axios from 'axios'
import { getAuth, getServer } from './auth'

export async function pull(param) {
  const server = await getServer(param[0])
  const auth = await getAuth(server.auth)

  const url = `${server.url}/api/${server.apiVersion}/languages/`
  console.log(url)
  const result = await axios.request({
    url: url,
    method: 'GET',
    auth: {
      username: auth.username,
      password: auth.password,
    }
  })

  // TODO PULL
  console.log('PULL')
  // console.log('server', server)
  // console.log('auth', auth)
  console.log(result)
}

export async function push(param) {
  const server = await getServer(param[0])
  const auth = await getAuth(server.auth)
  console.log('')

  // TODO PUSH
  console.log('PUSH')
  console.log('server', server)
  console.log('auth', auth)
}